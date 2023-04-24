import Link from 'next/link';

import Section from "../../../../components/Section/";

export default function PostCard({ post }) {
  return (
    <Link href={{ pathname: `/post`, query: { index: post.index } }}>
      <Section>
        <div className="flex w-full flex-col gap-2">
          <div className="flex justify-between w-full">
            <h3 className="text-2xl text-highlight font-bold">{post.title}</h3>
            <p className="text-black py-[0.05em] px-2 bg-white rounded-md flex items-center">{post.label}</p>
          </div>
          <p className="text-white">{post.createdAt}</p>
          <p className="text-white">{post.timeRead} minutes read</p>
        </div>
      </Section>
    </Link>
  )
}
