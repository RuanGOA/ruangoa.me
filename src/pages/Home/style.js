import styled from "styled-components";

export const ColumnContent = styled.main`
  display: flex;

  padding: 0 25vw;

  flex-direction: column;

  gap: 1em;

  @media (max-width: 1024px) {
    padding: 0;

    align-items: center;
  }
`;

export const Name = styled.h1`
  font-size: 3em;

  font-weight: bold;

  color: var(--highlight-color);
`;

export const Title = styled.h2`
  font-size: 2em;

  font-weight: bold;

  color: var(--highlight-color);
`;

export const Text = styled.p`
  font-size: 1.25em;

  text-align: justify;

  color: var(--text-color-${(props) => props.theme});

  transition: color 1s;
`;

export const Picture = styled.img`
  width: 15em;

  border-radius: 10px;
`;
