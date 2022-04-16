import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Markdown from 'react-markdown';

import { useConfig } from '../../contexts/config.context';

import MainContentContainer from '../index';

import { PostContainer } from './styled';

export default function PostPage() {
  const { setPageNumber, setPageName, getFieldData, theme } = useConfig();
  const [postText, setPostText] = useState();
  const navigator = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    import(`../../data/posts/${postId}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPostText(res))
          .catch(_ => navigator('/404'));
      }).catch(_ => navigator('/404'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

    if (getFieldData) {
      const data = getFieldData('postPage');
      const pageName = capitalize(postId.split('-').join(' '));
      setPageName(pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber, postId]);

  return (
    <MainContentContainer>
      <PostContainer theme={theme}>
        <Markdown
          children={postText}
          linkTarget="_blank"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={match[1]}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </PostContainer>
    </MainContentContainer>
  );
}
