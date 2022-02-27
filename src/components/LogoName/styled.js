import styled from 'styled-components';

export const Logo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${props => props.direction};
  gap: 1.25em;
  align-items: center;
  justify-content: center;

  font-weight: 500;

	& > svg {
		width: var(--site-symbol-size);
	}

  @media (max-device-width: 1024px) {
    & > svg {
      width: var(--site-symbol-size-mobile);
    }
	}
`;

export const Name = styled.h2`
  color: var(--highlight-color);

  letter-spacing: ${props => props.spacing}vw;
  text-transform: uppercase;

  font-size: var(--main-title-size);  
  @media (max-device-width: 1024px) {
    font-size: var(--main-title-size-mobile);
	}
`;
