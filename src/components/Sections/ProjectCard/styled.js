import styled from 'styled-components';

export const ProjectContainer = styled.a`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1em;

  border: 1px solid var(--highlight-color);
  border-radius: 25px;
  
  background: var(--grey);

  &:hover > h4 {
    color: var(--highlight-color);
  }

  padding: 1.5em 2em;

  box-sizing: border-box;

  cursor: pointer;
  
  @media (max-device-width: 1024px) {
    width: 80%;
  }
`;

export const ProjectName = styled.h4`
  font-size: var(--title-font-size);
  font-weight: 600;

  color: var(--white);

  transition: all 0.5s;
  @media (max-device-width: 1024px) {
    font-size: var(--title-font-size-mobile);
  }
`;

export const ProjectDescription = styled.p`
  width: 100%;
  
  text-align: start;
  font-size: var(--text-font-size);

  color: var(--white);

  @media (max-device-width: 1024px) {
    font-size: var(--text-font-size-mobile);
  }
`;

export const ProjectStatus = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  gap: 1.5em;

  @media (max-device-width: 1024px) {
    gap: 5vw;
  }
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--text-font-size);
  gap: 0.5em;
  color: var(--white);

  & > svg {
    width: 1em;
    font-size: 1em;
  }

  @media (max-device-width: 1024px) {
    font-size: var(--text-font-size-mobile);
    gap: 0.25em;
  }
`;
