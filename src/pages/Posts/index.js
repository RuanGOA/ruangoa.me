import React, { useEffect } from "react";

import Base from "../";

import { Link } from "react-router-dom";

import { useConfig } from "../../contexts/config.context";
import { usePosts } from "../../contexts/posts.context";

import readingTime from "reading-time/lib/reading-time";

import {
  PostCard,
  PostTitle,
  PostDate,
  PostInformations,
  PostTheme,
  PostTimeRead,
  WrapContent,
} from "./style";

export default function Posts() {
  const { setPageNumber, setPageName, getFieldData } = useConfig();
  const { posts } = usePosts();

  const getTimeRead = (text) => {
    const time = readingTime(text).minutes;

    return Math.ceil(time);
  };

  function formatDate(d) {
    const date = new Date(d);
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return (d = dd + "/" + mm + "/" + yyyy);
  }

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData("postsPage");
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <Base>
      <WrapContent>
        {posts &&
          Object.values(posts).map((post, i) => (
            <Link to={`/posts/${post.number}`}>
              <PostCard key={i}>
                <PostInformations>
                  <PostTheme>{post.labels[0] && post.labels[0].name}</PostTheme>
                  <PostDate>{formatDate(post.date)}</PostDate>
                </PostInformations>
                <PostTitle>{post.title}</PostTitle>
                <PostTimeRead>
                  {getTimeRead(post.body)} minutes read
                </PostTimeRead>
              </PostCard>
            </Link>
          ))}
      </WrapContent>
    </Base>
  );
}
