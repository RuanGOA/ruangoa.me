import styled from "styled-components";

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  align-items: center;

  grid-column: 1 / -1;

  justify-content: center;
`;

export const GridContent = styled.main`
  padding: 3em 6em 1em 6em;

  grid-column: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em 3em;

  background: var(--background-color-${(props) => props.theme});

  @media (max-width: 1024px) {
    min-height: 100vh;
    height: auto;
    overflow: none;
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    gap: 2em;

    padding: 0;

    height: auto;
  }

  transition: all 0.5s;
`;
