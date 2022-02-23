import styled from 'styled-components';

export const ProjectCard = styled.a`
  width: 100%;
  min-height: 15vh;

  display: flex;
  flex-direction: column;
  gap: 1em;

  border: 1px solid var(--highlight-color);
  border-radius: 25px;
  
  background: var(--grey);

  &:hover > h4 {
    color: var(--highlight-color);
  }

  padding: 1.5em 2.5em;

  box-sizing: border-box;

  cursor: pointer;
`;

export const ProjectName = styled.h4`
  font-size: 1.35em;
  font-weight: 600;

  color: var(--white);

  transition: all 0.5s;
`;

export const ProjectDescription = styled.p`
  font-size: 1.25em;

  color: var(--white);
`;

export const ProjectStatus = styled.div`
  width: 100%;

  display: flex;
  gap: 1.5em;
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.25em;
  gap: 0.5em;
  color: var(--white);

  & > svg {
    width: 1em;
    font-size: 1em;
  }
`;
