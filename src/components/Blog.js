'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { github } from '@/services/github';
import { getCachedPosts, setCachedPosts, filterPosts } from '@/utils/cache';
import { decodeString, encodeString } from '@/utils/utils';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PostList from '@/components/PostList';
import Post from '@/components/Post';
import Loading from "@/components/Loading";

export default function BlogPage() {
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postHash, setPostHash] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (searchParams.get('post')) {
      setPostHash(searchParams.get('post'));
    } else {
      setPostHash(null);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!postHash) {
      const cachedPosts = getCachedPosts();
      if (cachedPosts) {
        setPosts(cachedPosts);
      } else {
        github.getPosts().then(fetched => {
          const filteredPosts = filterPosts(fetched)
          setCachedPosts(filteredPosts);
          setPosts(filteredPosts);
        });
      }
      setIsLoading(false);
    }
  }, [postHash]);

  useEffect(() => {
    if (postHash) {
      github.getPost(decodeString(postHash)).then(setSelectedPost);
    } else {
      setSelectedPost(null);
    }
  }, [postHash]);

  return (
    <div className="max-w-none w-full px-2 lg:p-0 justify-center flex items-center justify-center">
      {isLoading && (<Loading />)}
      {!postHash && (<PostList posts={posts} />)}
      {postHash && selectedPost && (<Post post={selectedPost} />)}
    </div>
  );
}
