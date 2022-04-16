import styled from 'styled-components';

export const PortfolioButton = styled.button`
	font-family: 'Saira', sans-serif;
  font-weight: 500;
  font-size: var(--title-font-size);

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

  @media (max-width: 1024px) {
    font-size: 1.25em;
	}
`;
