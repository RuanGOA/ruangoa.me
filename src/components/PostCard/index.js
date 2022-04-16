import React from 'react';

import { useNavigate } from 'react-router-dom'

import { useConfig } from '../../contexts/config.context';

import {
  PostContainer,
  PostName,
  PostTagContainer,
  PostTag,
  PostDescription
} from './styled';

export default function PostCard({ 
  name, 
  date, 
  language, 
  description
}) {
  const { theme } = useConfig();

  const navigator = useNavigate();

  const postId = name.toLowerCase().split(' ').join('-');

  const handlePost = () => {
    navigator(postId);
  }

  return (
    <PostContainer onClick={handlePost} theme={theme}>
      <PostName>{name}</PostName>
      <PostTagContainer>
        {[date, language].map((element, index) => (
          <PostTag key={index}>{element}</PostTag>
        ))}
      </PostTagContainer>
      <PostDescription>
        {description}
      </PostDescription>
    </PostContainer>
  );
}
