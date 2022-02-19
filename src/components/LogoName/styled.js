import styled from 'styled-components';

export const Logo = styled.div`
  width: 100%;

  display: flex;
  gap: 1.25em;
  align-items: center;
  justify-content: center;

  font-weight: 500;

	& > svg {
		width: 4em;
	}
`;

export const Name = styled.h2`
  color: var(--highlight-color);

  letter-spacing: .1em;
  text-transform: uppercase;

  font-size: 1.75em;
`;
