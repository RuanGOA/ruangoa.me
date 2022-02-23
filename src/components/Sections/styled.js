import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1em;
  
  text-align: justify;

  color: var(--text-color-${props => props.theme});

  transition: all 0.5s;
`; 

export const ProjectSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  grid-column: 1 / -1;

  gap: 1em;
`;

export const ProjectsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3em;
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
  
  transition: all 0.5s;
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

  color: var(--text-color-${props => props.theme});

  &:visited {
    color: var(--text-color-${props => props.theme});
  }

  &:hover {
    color: var(--highlight-color);
  }

  transition: all 0.5s;
`;
