import Link from 'next/link';

export default function Posts({ posts }) {
  return (
    <div className="w-full p-4 lg:w-2/3 lg:p-0">
      <div className="prose dark:prose-invert mb-8">
        <h1>Posts</h1>
      </div>
      <div className="grid gap-6">
        {posts.map(post => (
          <Link
            key={`${post.title}-${post.number}`}
            href={`/?post=${post.id}`}
            className="block border flex flex-col gap-2 rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between align-center">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.date}</p>
            </div>
            <p className="line-clamp-2">{post.readTime} minutes read</p>
            <p className="text-gray-600 line-clamp-2">{post.body}</p>
            <div className="flex flex-wrap gap-2 w-fit">
              {post.tags.map((tag) => (
                <label key={`${tag}`} className="px-2 py-1 bg-main text-black border rounded-lg">{tag}</label>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
