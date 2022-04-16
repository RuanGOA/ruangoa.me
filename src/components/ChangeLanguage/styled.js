import styled from 'styled-components';

export const LanguageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;

  border: 1px solid var(--highlight-color);
  border-radius: 5px;
`;

export const LanguageItem = styled.button`
  font-size: var(--menu-font-size);

  border-radius: 5px;
  border: 0;

  color: var(--white);

  cursor: pointer;

  text-transform: uppercase;
  background: transparent;

  padding: .15em .25em;

  &.active {
    background: var(--white);
    color: var(--highlight-color);
  }

  @media (max-width: 1024px) {
    font-size: var(--menu-font-size-mobile);
	}

  transition: all 0.5s;
`;
