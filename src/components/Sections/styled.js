import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1em;

`; 

export const SectionName = styled.h3`
  color: var(--highlight-color);

  letter-spacing: .15vw;
  text-transform: uppercase;

  font-size: 1.5em;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 1.25em;

  margin-bottom: .25em;

  &.bold {
    font-weight: 600;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ItemList = styled.li`
  list-style-type: none;

  &.dotted {
    list-style-type: circle;
    margin-left: 1.5em; 
  }
`;

export const Link = styled.a`
  font-size: 1.25em;

  cursor: pointer;
  text-decoration: underline;

  &:visited {
    color: var(--black);
  }

  &:hover {
    color: var(--highlight-color);
  }

  transition: all 0.5s;
`;
