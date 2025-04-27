import { Suspense } from 'react';

import Blog from "@/components/Blog";
import Loading from "@/components/Loading";

export async function generateMetadata({ params }) {
  return {
    title: `RuanGOA - Posts`,
  }
}

export default function BlogPage() {
  return (
    <div className="w-full flex align-center justify-center">
      <Suspense fallback={<Loading />}>
        <Blog />
      </Suspense>
    </div>
  );
}
