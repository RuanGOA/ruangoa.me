import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  left: -30%;
  z-index: 998;
  background: var(--grey);
  width: 15vw;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  transition: 300ms left cubic-bezier(0.77, 0, 0.175, 1);

  border-right: solid 2px var(--highlight-color);

  color: var(--highlight-color);

  padding: 1em;
  padding-top: 5.5em;

  align-items: space-between;
  justify-content: space-between;

  &.active {
    left: 0;
  }

  & p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    height: fit-content;
    left: 0;
    top: -100%;
    width: 100%;
    border: none;
    border-bottom: solid 2px var(--highlight-color);
    gap: 1em;

    transition: 300ms top cubic-bezier(0.77, 0, 0.175, 1);

    &.active {
      top: 0;
    }
  }
`;

export const RedirectsContainer = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 4em;

  & > svg {
    width: var(--site-symbol-size);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    justify-content: start;
    gap: 0;
    margin-top: 1em;
    & > svg {
      width: 0;
    }
  }
`;

export const AsideToggler = styled.div`
  position: absolute;

  left: 1em;
  top: 1em;

  z-index: 999;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: var(--highlight-color);

  & span,
  & span::before,
  & span::after {
    position: absolute;
    content: "";
    width: 1.5em;
    height: 2.5px;
    background: var(--highlight-color);

    border-radius: 30px;
    transition: 500ms cubic-bezier(0.77, 0, 0.175, 1);
  }

  & span::before {
    top: -8px;
  }

  & span::after {
    top: 8px;
  }

  &.active > span {
    position: fixed;
    background: transparent;
  }

  &.active > span::before,
  &.active > span::after {
    top: 0px;
  }
  &.active > span::before {
    transform: rotate(-225deg);
  }
  &.active > span::after {
    transform: rotate(225deg);
  }
`;

export const Toggler = styled.span``;
