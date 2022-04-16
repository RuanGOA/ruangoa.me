import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: 1 / -1;
`;

export const Text = styled.p`
  font-size: var(--footer-font-size);
  font-weight: 500;
  color: var(--highlight-color);
  @media (max-width: 1024px) {
    margin-top: 2em;
    font-size: var(--footer-font-size-mobile);
  }
`;
