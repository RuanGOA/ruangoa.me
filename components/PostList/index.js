"use client"
import { useEffect, useState } from 'react';

import Link from 'next/link';

import Section from "../../components/Section/";
import { formatDate, getTimeRead } from "./components/utils";
import PostCard from "./components/PostCard/";
import Loading from "../Loading/";

import { github } from "../../services/github";

export default function PostList() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setIsLoading(true);
    const postsStorage = localStorage.getItem("@ruangoa/posts")
    if (postsStorage !== null) {
      setPosts(JSON.parse(postsStorage));      
    } else {
      const postsReq = await github.getPosts()
      const posts = postsReq.map((item) => ({
        title: item.title,
        label: item.labels[0].name,
        createdAt: formatDate(item.created_at),
        timeRead: getTimeRead(item.body),
        url: item.url,
        index: item.number,
      }));
      setPosts(posts);
      localStorage.setItem("@ruangoa/posts", JSON.stringify(posts))
    }
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    getPosts();
  }, []);

  return (
    isLoading ? (
      <Loading />
    ) : (
      <>
        {posts.map((item, i) => (
          <PostCard key={i} post={item} />
        ))}
      </>
    )
  )
}
