import styled from 'styled-components';

export const Title = styled.p`
  color: var(--text-color-${props => props.theme});
  
  letter-spacing: ${props => props.spacing}vw;

  text-transform: uppercase;

  font-size: 1.5em;
  font-weight: 500;

  transition: all 0.5s;
`;
