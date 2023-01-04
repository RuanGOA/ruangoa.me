import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  height: 10vh;

  position: absolute;

  display: flex;

  justify-content: space-between;

  padding: 1em;
  padding-right: 2em;

  background: var(--background-color-${(props) => props.theme});

  transition: background 1s;

  @media (max-width: 1024px) {
    ${(props) =>
      props.menu
        ? "transition: background .5s; background: var(--grey); position: fixed; top: 0; z-index: 999;"
        : ""}
  }
`;

export const UtilContainer = styled.div`
  display: flex;

  z-index: 999;

  gap: 1em;
`;
