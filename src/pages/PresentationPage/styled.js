import styled from 'styled-components';

export const PageWithBackground = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${props => props.backgroundPath});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  display: grid;
  justify-content: center;
  align-content: center;
  gap: 2em;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;

  padding: 2em 7.5em;

  background-color: var(--presentation-background-color-${props => props.theme});

  border-radius: 25px;
  border: 3px solid var(--highlight-color);
  box-shadow: 4px 5px 15px -4px var(--black);

  @media (max-device-width: 1024px) {
    padding: 2em 1em;
	}
`;

export const PortfolioButton = styled.button`
	font-family: 'Saira', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;

  background: var(--grey);

  padding: 0.25em 2em;

  color: var(--highlight-color);

  border: 3px solid var(--highlight-color);
  border-radius: 15px;

  &:hover {
		color: var(--highlight-color);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  cursor: pointer;

  transition: transform 0.5s;

  @media (max-device-width: 1024px) {
    font-size: 1.25em;
	}
`;
