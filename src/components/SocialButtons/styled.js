import styled from "styled-components";

export const LinkButtons = styled.div`
  display: flex;
  gap: 0.5em;

  & > a {
    fill: var(--white);
  }
`;

export const Icon = styled.a`
  width: var(--social-buttons-size);
  cursor: pointer;

  &:hover {
    fill: var(--highlight-color);
  }

  @media (max-width: 1024px) {
    width: var(--social-buttons-size-mobile);
  }

  transition: all 0.5s;
`;
