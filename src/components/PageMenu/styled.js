import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Menu = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1em;
`;

export const ItemMenu = styled(Link)`
  color: #F0F0F0;
  font-size: 1.35em;

  cursor: pointer;

  list-style-type: none;

  &:hover {
    color: var(--highlight-color);
  }

  &.active {
    text-decoration: underline;
    color: var(--highlight-color);
  }

  transition: all 0.5s;
`;
