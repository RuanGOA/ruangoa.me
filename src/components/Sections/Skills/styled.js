import styled from 'styled-components';

export const TagContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  font-size: var(--text-font-size);
  padding: .25em;

  border-radius: 5px;

  background: var(--grey);
  color: var(--white);

  @media (max-width: 1024px) {
    font-size: var(--text-font-size-mobile);
  }
`;
