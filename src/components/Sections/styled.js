import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: fit-content;
  font-size: var(--text-font-size);

  display: flex;
  flex-direction: column;
  gap: 1em;

  text-align: justify;

  color: var(--text-color-${props => props.theme});

  transition: all 0.5s;
  @media (max-device-width: 1024px) {
    font-size: var(--text-font-size-mobile);
    gap: 1vh;
  }
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

  @media (max-device-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: 1fr;
    width: 100%;
    text-align: center;

    gap: 1em;
  }

`;

export const SectionName = styled.h3`
  font-size: var(--title-font-size);
  color: var(--highlight-color);

  letter-spacing: .15vw;
  text-transform: uppercase;

  font-weight: 500;

  @media (max-device-width: 1024px) {
    font-size: var(--title-font-size-mobile);
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: var(--text-font-size);
  margin-bottom: .25em;

  &.bold {
    font-weight: 600;
  }

  @media (max-device-width: 1024px) {
    font-size: var(--text-font-size-mobile);
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
