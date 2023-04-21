"use client"
import { useState, useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import html from 'remark-html';
import { remark } from 'remark';

import Loading from "../../components/Loading";

import { github } from "../../services/github";

export default function PostContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [doSearch, setDoSearch] = useState(true);
  const [post, setPost] = useState({});

  const htmlText = remark().use(html).processSync(post.body).toString();

  const useSearch = useSearchParams();

  const getPost = async (index) => {
    const postReq = await github.getPost(index);
    setPost(postReq);
    setIsLoading(false);
  }

  useEffect(() => {
    if (doSearch && useSearch.get("index")) {
      const postIndex = useSearch.get("index");

      getPost(postIndex);

      setDoSearch(false);
    }
  }, [useSearch, doSearch]);

  return (
    isLoading ? (
      <Loading />
    ) : (
      <div className="px-4 lg:px-[22%] max-w bg-background-dark">
        <div className={`px-[3%] py-4 lg:py-12 items-center gap-8 flex-col lg:flex-row lg:justify-center justify-center`}>
          <div dangerouslySetInnerHTML={{ __html: htmlText }} className="text-white prose-lg prose-li:list-disc prose-code:bg-white prose-code:py-[0.1em] prose-code:px-1 prose-code:rounded-md prose-code:text-black"/>;
        </div>
      </div>
    )
  );
}


