import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: fit-content;
  font-size: var(--text-font-size);

  display: flex;
  flex-direction: column;
  gap: 1em;

  text-align: justify;

  color: var(--text-color-${(props) => props.theme});

  transition: all 0.5s;
  @media (max-width: 1024px) {
    font-size: var(--text-font-size-mobile);
    gap: 1vh;
  }
`;

export const SectionName = styled.h3`
  font-size: var(--title-font-size);
  color: var(--highlight-color);

  letter-spacing: 0.15vw;
  text-transform: uppercase;

  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: var(--title-font-size-mobile);
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: var(--text-font-size);
  margin-bottom: 0.25em;

  &.bold {
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    font-size: var(--text-font-size-mobile);
  }

  transition: all 0.5s;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;

  list-style-position: inside;

  &.dotted {
    gap: 0.25em;
  }
`;

export const ItemList = styled.li`
  text-align: start;
  list-style-type: none;

  &.dotted {
    list-style-type: circle;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;

  color: var(--text-color-${(props) => props.theme});

  &:visited {
    color: var(--text-color-${(props) => props.theme});
  }

  &:hover {
    color: var(--highlight-color);
  }

  transition: all 0.5s;
`;

export const LoadingContainer = styled.div`
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
