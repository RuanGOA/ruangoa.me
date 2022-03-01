import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;

  grid-column: 1;

  background: var(--grey);

  padding: 2vw;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;

export const AsideMain = styled.div`
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

export const UtilContainer = styled.div`
  height: fit-content;
  display: flex;

  gap: 2em;

  flex-direction: column;
`;

export const AsideUtils = styled.div`
  height: auto;

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
  & > * > a {
    width: 2em;
  }
`;
