import Link from 'next/link';
import { github } from '@/services/github';

export default async function PostList() {
  const posts = await github.getPosts();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <Link
            key={post.number}
            href={`/blog/${post.number}`}
            className="block border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 line-clamp-2">{post.body.slice(0, 120)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
