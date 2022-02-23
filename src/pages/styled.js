import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 2fr 12fr;
`;

export const Main = styled.main`
  height: 100vh;
  padding: 3em 6em 1em 6em;

  grid-column: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em 8em;

  overflow: auto;

  background: var(--background-color-${props => props.theme});

  transition: all 0.5s;
`;
