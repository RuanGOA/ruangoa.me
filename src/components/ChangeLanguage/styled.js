import styled from 'styled-components';

export const LanguageContainer = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;

  border: 1px solid var(--highlight-color);
  border-radius: 5px;
`;

export const LanguageItem = styled.button`
  font-size: 1.25em;

  border-radius: 5px;
  border: 0;

  color: #F0F0F0;

  cursor: pointer;

  text-transform: uppercase;
  background: transparent;

  padding: .15em .25em;

  &.active {
    background: #C4C4C4;
    color: var(--highlight-color);
  }

  transition: all 0.5s;
`;
