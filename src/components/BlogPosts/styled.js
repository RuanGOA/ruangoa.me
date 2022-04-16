import styled from 'styled-components';

export const BlogContainer = styled.main`
  width: 100%;

  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;

  gap: 1.5em;
`;

export const Divisor = styled.div`
  border-bottom: 1px solid var(--text-color-${props => props.theme});
  width: 100%;

  transition: all 0.5s;
`;
