import styled from 'styled-components';

export const ThemeButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;

  background: transparent;

  border: 0;

  transition: all 0.5s;

  padding: 0;

  & > svg {
    width: 5em;
  }
`;
