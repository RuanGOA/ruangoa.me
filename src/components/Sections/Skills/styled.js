import styled from 'styled-components';

export const TagContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  font-size: 1.25em;
  padding: .25em;

  border-radius: 5px;

  background: var(--grey);
  color: var(--white);
`;
