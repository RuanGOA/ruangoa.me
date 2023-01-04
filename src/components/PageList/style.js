import { Link } from "react-router-dom";

import styled from "styled-components";

export const Menu = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 1em;

  @media (max-width: 1024px) {
    gap: 1.5vh;
    flex-direction: row;
    width: auto;
  }
`;

export const ItemMenu = styled(Link)`
  color: var(--white);
  font-size: var(--menu-font-size);

  cursor: pointer;

  padding: 0.25em 0;

  display: flex;

  justify-content: center;

  width: 100%;

  list-style-type: none;

  border-radius: 5px;

  &:hover {
    color: var(--highlight-color);
  }

  &.active {
    color: var(--black);
    background: var(--highlight-color);
  }

  @media (max-width: 1024px) {
    font-size: var(--menu-font-size-mobile);
    padding: 0.25em 0.5em;
  }

  transition: all 0.5s;
`;
