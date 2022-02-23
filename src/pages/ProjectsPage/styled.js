import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 15vw auto;
`;

export const Main = styled.main`
  grid-column: 2 / -1;

  padding: 3em 6em 0em 6em;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  
  overflow: auto;

  background: var(--background-color-${props => props.theme});

  transition: all 0.5s;
`;
