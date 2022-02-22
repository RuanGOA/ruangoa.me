import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;

  grid-column: 1;

  background: #323232;

  padding: 2em;

  display: grid;
  grid-template-rows: auto fit-content(5vh) fit-content(10vh);
  align-items: center;
  gap: 3em;
`;

export const AsideMain = styled.div`
  grid-row: 1;

  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  & > svg {
    width: 4em;
    cursor: pointer;
  }

  gap: 3em;
`;

export const AsideUtils = styled.div`
  grid-row: 2;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > button > svg {
    width: 3.5em;
  }
`

export const AsideFooter = styled.div`
  grid-row: 3;
  padding-bottom: 3em;

  & > * > a {
    width: 2em;
  }
`;
