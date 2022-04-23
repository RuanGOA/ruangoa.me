import styled from 'styled-components';

export const StatusCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--grey);
  padding: 1em 3em;
  border-radius: 15px;
  border: 3px solid var(--highlight-color);

  transition: all 0.5s;
`;

export const StatusCode = styled.h1`
  font-size: 10em;
  color: var(--highlight-color);
  font-weight: bold;
`;

export const StatusMessage = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2em;
  color: var(--white);
`;
