import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Menu = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1em;
`;

export const ItemMenu = styled(Link)`
  text-align: center;

  color: var(--white);
  font-size: var(--menu-font-size);

  cursor: pointer;

  list-style-type: none;

  padding: .25em;

  border-radius: 5px;

  &:hover {
    color: var(--highlight-color);
  }

  &.active {
    color: var(--black);
    background: var(--highlight-color);
  }

  transition: all 0.5s;
`;
