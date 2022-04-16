import styled from 'styled-components';

export const PostContainer = styled.section`
  text-decoration: none;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75em;

  cursor: pointer;

  color: var(--text-color-${props => props.theme});

  &:hover {
    -moz-transform: scale(1.0125);
    -webkit-transform: scale(1.0125);
    transform: scale(1.0125);
    h3 {
      color: var(--highlight-color);
    }
  }

  &:visited {
    color: none;
  }

  transition: all 0.5s;
`;

export const PostName = styled.h3`
  font-size: var(--title-font-size);
  font-weight: bold;

  transition: all 0.5s;

  @media (max-width: 1024px) {
    font-size: var(--title-font-size-mobile);
    gap: 1vh;
  }
`;

export const PostTagContainer = styled.div`
  display: flex;
  gap: 0.25em;
  width: 100%;
`;

export const PostTag = styled.label`
  padding: 5px;
  border-radius: 5px;
  color: var(--white);
  background: var(--light-grey);

  font-size: var(--text-font-size);

  @media (max-width: 1024px) {
    font-size: var(--text-font-size-mobile);
    gap: 1vh;
  }
`;

export const PostInformation = styled.p`
  width: fit-content;
  color: var(--text-color-${props => props.theme});
  font-size: var(--menu-font-size);
  
  ${props => props.italic && 'font-style: italic;'};

  @media (max-width: 1024px) {
    font-size: var(--menu-font-size-mobile);
    gap: 1vh;
  }
`;

export const PostDescription = styled.p`
  font-size: var(--text-font-size);

  @media (max-width: 1024px) {
    font-size: var(--text-font-size-mobile);
    gap: 1vh;
  }
`;
