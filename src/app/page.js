import { Suspense } from 'react';

import BlogList from "@/components/BlogList";
import Loading from "@/components/Loading";

export async function generateMetadata({ params }) {
  return {
    title: `RuanGOA - Posts`,
  }
}

export default function Blog() {
  return (
    <div className="w-full flex align-center justify-center">
      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
