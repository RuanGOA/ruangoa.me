import styled from 'styled-components';

export const StatusPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  grid-column: 1 / -1;
`;

export const StatusCard = styled.div`
  background-color: var(--grey);
  padding: 1em 3em;
  border-radius: 15px;
  border: 3px solid var(--highlight-color);
`;

export const StatusCode = styled.h1`
  font-size: 10em;
  color: var(--highlight-color);
  font-weight: bold;
`;

export const StatusExplain = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2em;
  color: var(--white);
`;
