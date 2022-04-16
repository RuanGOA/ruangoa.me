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

  @media (max-width: 1024px) {
    width: auto;
    height: auto;
    padding: 2em 1em;
	}
`;

export const PageCentralizer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
