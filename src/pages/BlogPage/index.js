import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import MainContentContainer from '../index';

import BlogPosts from '../../components/BlogPosts/';

export default function BlogPage() {
  const { setPageNumber, setPageName, getFieldData } = useConfig();

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData('blogPage');
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <MainContentContainer>
      <BlogPosts />
    </MainContentContainer>
  );
}
