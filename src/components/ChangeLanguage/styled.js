import styled from "styled-components";

export const LanguageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;

  border: 1px solid var(--highlight-color);
  border-radius: 5px;
`;

export const LanguageItem = styled.button`
  font-size: var(--menu-font-size);

  border-radius: 5px;
  border: 0;

  height: fit-content;

  color: var(--text-color-${(props) => props.theme});

  cursor: pointer;

  text-transform: uppercase;
  background: transparent;

  padding: 0.25em;

  &.active {
    background: var(--background-color-${(props) => props.theme}-reversed);
    color: var(--highlight-color);
  }

  @media (max-width: 1024px) {
    font-size: var(--menu-font-size-mobile);

    &.active {
      background: var(
        --background-color-${(props) => (props.menu ? "light" : `${props.theme}-reversed`)}
      );
    }

    color: var(
      --text-color-${(props) => (props.menu ? "dark" : `${props.theme}`)}
    );
  }

  transition: all 0.5s;
`;
