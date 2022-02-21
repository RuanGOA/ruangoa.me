import styled from 'styled-components';

export const LinkButtons = styled.div`
  width: 100%;
	display: flex;
	align-content: center;
	justify-content: space-evenly;
`;

export const Icon = styled.a`
	width: 2.5em;
	cursor: pointer;

	fill: var(--black);

	&:hover {
		fill: var(--highlight-color);
	}

	transition: all 0.5s;
`;
