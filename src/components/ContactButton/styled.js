import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  height: fit-content;

  background: transparent;

  border: 0;

  transition: all 1s;

  padding: 0;

  & svg {
    border-radius: 5px;
    width: var(--theme-icon-size);
    stroke: var(--highlight-color);
    padding: 0.25em;

    transition: all 1s;
  }

  & svg:hover {
    background: var(--background-color-${(props) => props.theme}-reversed);
  }
`;
