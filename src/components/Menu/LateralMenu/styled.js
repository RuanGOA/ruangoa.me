import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;

  grid-column: 1;

  background: var(--grey);

  padding: 2vw;

  display: grid;
  grid-template-rows: auto fit-content(5vh) fit-content(10vh);
  align-items: center;
  gap: 3em;
`;

export const AsideMain = styled.div`
  height: 100%;
  grid-row: 1;

  display: flex;
  align-items: center;
  flex-direction: column;

  & > svg {
    width: var(--site-symbol-size);
    cursor: pointer;
  }

  gap: 3em;
`;

export const AsideUtils = styled.div`
  height: auto;
  grid-row: 2;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > button > svg {
    border-radius: 5px;
    width: var(--theme-icon-size);
    stroke: var(--highlight-color);
    padding: 0.25em;

    transition: all 0.5s;
  }

  & > button > svg:hover {
    background: var(--white);
  }
`;

export const AsideFooter = styled.div`
  grid-row: 3;
  padding-bottom: 3em;

  & > * > a {
    width: 2em;
  }
`;
