import React from 'react';

import { 
  Title
} from './styled';

export default function JobTitle({ isPresentationPage }) {
  const spacing = isPresentationPage ? '0.1' : '0.5';

  return (
    <Title spacing={spacing}>
      Software Engineer
    </Title>
  );
}
