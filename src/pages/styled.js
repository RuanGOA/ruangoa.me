import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;

  overflow: auto;

  display: grid;
  grid-template-columns: 2fr 12fr;
  
  @media (max-device-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: none;
	}
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

  @media (max-device-width: 1024px) {
    height: auto;
    overflow: none;
    grid-column: 1;
    grid-row: 2;
    grid-template-columns: 1fr;

    gap: 2em;

    padding: 2em 1em;

    height: auto;
	}

  transition: all 0.5s;
`;
