import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 15vw auto;
`;

export const Lateral = styled.div`
  height: 100vh;
  width: 100%;
  grid-column: 1 / 1;

  background: #323232;
`;

export const Main = styled.main`
  grid-column: 2 / -1;

  padding: 3em 6em 0em 6em;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em 8em;

  background: #F0F0F0;

  overflow: auto;
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  
  align-items: center;

  grid-column: 1 / -1;

  justify-content: center;
`;
