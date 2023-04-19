"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { github } from "../../services/github";

import Loading from "../../components/Loading";
import PostContent from "../../components/PostContent";

export default function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});
  const [doSearch, setDoSearch] = useState(true);

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
    <main className="max-w min-h-screen bg-background-dark">
      {isLoading ? (
        <Loading />
      ) : (
        <PostContent post={post} />
      )}
    </main>
  )
}
