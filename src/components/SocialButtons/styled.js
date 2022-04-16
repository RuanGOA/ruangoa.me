import styled from 'styled-components';

export const LinkButtons = styled.div`
  width: 100%;
	display: flex;
	align-content: center;
	gap: 1em;
	justify-content: center;

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

  @media (max-width: 1024px) {
    width: var(--social-buttons-size-mobile);
	}

	transition: all 0.5s;
`;
