import styled from 'styled-components';

export const TopMenuContainer = styled.div`
  width: 100%;
  height: auto;
  background: var(--grey);

  border-bottom: 2px solid var(--highlight-color);

  transition: all 0.5s;
`;

export const RetractContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;

  padding: 0.5em;

  transition: all 0.5s;
`;

export const RetractButton = styled.button`
  width: auto;
  background: transparent;
  cursor: pointer;

  border: 0;

  margin: 1vh 1vw;

  transition: all 0.5s;

  & > svg {
    fill: var(--white);
    width: 3.5vh;
  }
`;

export const MenuContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  gap: 1.5vh;
  padding: 2vh 2vw;

  height: auto;

  transition: all 0.5s;
`;

export const MenuUtils = styled.div`
  display: flex;
  align-items: center;

  gap: 2vw;

  & > * > svg {
    width: 3.5vh;
    stroke: var(--highlight-color);
  }

  transition: all 0.5s;
`;
