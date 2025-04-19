'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { github } from '@/services/github';
import { getCachedPosts, setCachedPosts } from '@/utils/cache';
import LocalMarkdownRenderer from '@/components/LocalMarkdownRenderer';
import Loading from "@/components/Loading";

export default function BlogPage() {
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postNumber, setPostNumber] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setPostNumber(searchParams.get('post'))
  }, [searchParams]);

  useEffect(() => {
    const cachedPosts = getCachedPosts();
    if (!postNumber) {
      if (cachedPosts) {
        setPosts(cachedPosts);
      } else {
        github.getPosts().then(fetched => {
          setCachedPosts(fetched);
        });

        setPosts(getCachedPosts());
      }
      setIsLoading(false)
    }
  }, [postNumber]);

  useEffect(() => {
    if (postNumber) {
      github.getPost(postNumber).then(setSelectedPost);
    } else {
      setSelectedPost(null);
    }
  }, [postNumber]);

  return (
    <div className="max-w-none w-full px-2 lg:p-0 justify-center flex items-center justify-center">
      {isLoading && (<Loading />)}
      {!postNumber && (
        <div className="w-full p-4 lg:w-2/3 lg:p-0">
          <div className="prose dark:prose-invert mb-8">
            <h1>Posts</h1>
          </div>
          <div className="grid gap-6">
            {posts.map(post => (
              <Link
                key={`${post.title}-${post.number}`}
                href={`/blog?post=${post.number}`}
                className="block border gap-2 rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <div className="flex justify-between align-center">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p>{post.date}</p>
                </div>
                <p className="line-clamp-2">{post.readTime} minutes read</p>
                <p className="text-gray-600 line-clamp-2">{post.body}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {postNumber && selectedPost && (
        <div className="w-full flex items-center justify-center flex-col gap-2">
          <div className="w-full lg:w-2/3 px-4">
          <button
            onClick={() => window.history.back()}
            className="mb-4 text-xl text-main underline cursor-pointer"
          >
            ← Back to list
          </button>
          </div>
          <LocalMarkdownRenderer>{selectedPost.body}</LocalMarkdownRenderer>
        </div>
      )}
    </div>
  );
}
