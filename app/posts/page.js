import Link from 'next/link';

import PostList from "../../components/PostList/";

import { github } from "../../services/github";

export async function generateMetadata({ params }) {
  return {
    title: `Posts | RuanGOA`,
  }
}

export default function Posts() {
  return (
    <main className="max-w min-h-screen bg-background-dark">
      <PostList />
    </main>
  )
}
