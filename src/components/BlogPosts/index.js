import React from 'react';

import { useConfig } from '../../contexts/config.context';

import PostCard from '../../components/PostCard/';
import Divide from '../Divide/';

import { BlogContainer } from './styled';

export default function BlogPosts() {
  const { getFieldData } = useConfig();

  const data = getFieldData('blogPosts');

  return (
    <BlogContainer>
      {data.map((element, index) => {
        return (
          <React.Fragment key={index}>
            <PostCard {...element} key={index} />
            {(index < data.length - 1) && <Divide />}
          </React.Fragment>
        )
      })}
    </BlogContainer>
  );
}
