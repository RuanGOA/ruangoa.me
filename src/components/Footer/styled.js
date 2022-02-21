import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;

  padding: 1em 0;

  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: 1 / -1;
`;

export const Text = styled.p`
  font-weight: bold;
  color: var(--highlight-color);
`;
