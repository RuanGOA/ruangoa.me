import styled from 'styled-components';

export const Title = styled.p`
  color: var(--text-color-${props => props.theme});
  
  letter-spacing: ${props => props.spacing}vw;

  text-transform: uppercase;

  font-size: var(--main-title-size);
  font-weight: 500;

  transition: all 0.5s;
`;
