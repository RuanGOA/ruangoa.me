import React from 'react';

import { useNavigate } from 'react-router-dom'

import { useConfig } from '../../contexts/config.context';

import { removeAccents } from '../../utils/removeAccents';

import {
  PostContainer,
  PostName,
  PostTagContainer,
  PostTag,
  PostDescription
} from './styled';

export default function PostCard({ 
  name,
  id,
  date, 
  language, 
  description
}) {
  const { theme } = useConfig();

  const navigator = useNavigate();

  const handlePost = () => {
    navigator(id);
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
