import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import Markdown from "react-markdown";

import { useConfig } from "../../contexts/config.context";
import { usePosts } from "../../contexts/posts.context";
import { ReactComponent as LoadingIcon } from "../../assets/loading.svg";

import MainContentContainer from "../index";

import { PostContainer, LoadingContainer } from "./style";

export default function PostPage() {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { setPageNumber, setPageName, getFieldData, theme } = useConfig();
  const { posts } = usePosts();
  const { postId } = useParams();

  useEffect(() => {
    if (posts && postId) {
      setPost(posts[postId]);
      setIsLoading(false);
    }
  }, [posts, postId]);

  useEffect(() => {
    if (getFieldData && post) {
      const dataPageType = getFieldData("postPage");

      setPageName(post.title);
      setPageNumber(dataPageType.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber, postId, post]);

  return (
    <MainContentContainer>
      {isLoading ? (
        <LoadingContainer>
          <LoadingIcon />
        </LoadingContainer>
      ) : (
        <PostContainer theme={theme}>
          <Markdown
            children={post.body}
            linkTarget="_blank"
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dracula}
                    language={match[1]}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </PostContainer>
      )}
    </MainContentContainer>
  );
}
