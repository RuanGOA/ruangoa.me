import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;

  padding: 2em 7.5em;

  background-color: var(--presentation-background-color-light);

  border-radius: 25px;
  border: 3px solid var(--highlight-color);
  box-shadow: 4px 5px 15px -4px var(--black);

  @media (max-width: 1024px) {
    padding: 2em 1em;
  }
`;
