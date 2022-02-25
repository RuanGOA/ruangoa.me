import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: .5em 0;

  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: 1 / -1;
`;

export const Text = styled.p`
  font-size: var(--footer-font-size);
  font-weight: 500;
  color: var(--highlight-color);
`;
