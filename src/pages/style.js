import styled from "styled-components";

export const Content = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  position: absolute;

  width: 100%;
  min-height: 90vh;

  margin-top: 10vh;

  padding: 1em;

  background: var(--background-color-${(props) => props.theme});

  transition: background 1s;

  @media (max-width: 1024px) {
    padding: 0 2.25em;
  }
`;

export const Root = styled.div`
  background: var(--background-color-${(props) => props.theme});
`;

export const LoadingContainer = styled.div`
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
