import { useContext, createContext, useState, useEffect } from "react";

import { github } from "../services/github";

export const PostsContext = createContext({});

export function PostsProvider(props) {
  const [posts, setPosts] = useState();

  const contextValue = {
    posts,
    setPosts,
  };

  const getPosts = async () => {
    const apiPosts = await github.getPosts();

    const dicPosts = {};
    apiPosts.forEach((post) => {
      dicPosts[post.number] = {
        number: post.number,
        title: post.title,
        date: post.created_at,
        body: post.body,
        labels: post.labels,
        reactions: {
          likes: post.reactions["+1"],
          rocket: post.reactions.rocket,
        },
      };
    });

    setPosts(dicPosts);
  };

  useEffect(() => {
    if (!posts) {
      getPosts();
    }
  }, [posts]);

  return (
    <PostsContext.Provider value={contextValue}>
      {props.children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  return { ...context };
}
