import Link from 'next/link';

import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function BlogPage({ post }) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2">
      <div className="w-full lg:w-2/3 px-4">
        <Link
            href={`/`}
        >
          <button
            className="mb-4 text-xl text-main underline cursor-pointer"
          >
            ← Back to list
          </button>
        </Link>
      </div>
      <MarkdownRenderer>{post.body}</MarkdownRenderer>
    </div>
  );
}
