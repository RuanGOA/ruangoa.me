import styled from 'styled-components';

export const LinkButtons = styled.div`
  width: 100%;
	display: flex;
	align-content: center;
	justify-content: space-evenly;

	& > a {
		fill: var(--text-color-${props => props.theme});
	}
`;

export const Icon = styled.a`
	width: 2.5em;
	width: var(--social-buttons-size);
	cursor: pointer;

	&:hover {
		fill: var(--highlight-color);
	}

	transition: all 0.5s;
`;
