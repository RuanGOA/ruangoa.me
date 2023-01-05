import styled from "styled-components";

export const WrapContent = styled.main`
  width: 100%;
  display: flex;

  justify-content: flex-start;

  flex-wrap: wrap;

  gap: 1em;

  padding: 2em 15%;

  @media (max-width: 1024px) {
    padding: 1em 0;
    flex-wrap: none;
    flex-direction: column;
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

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 10em;
  width: 20vw;

  border-radius: 10px;
  background: var(--grey);
  border: 1px solid var(--highlight-color);
  color: var(--white);

  padding: 1em;

  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const PostInformations = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const PostTheme = styled.span`
  padding: 0.05em 0.15em;
  background: var(--highlight-color);
  color: var(--black);

  border-radius: 5px;
`;

export const PostDate = styled.p``;

export const PostTitle = styled.h4`
  font-weight: 500;

  color: var(--highlight-color);

  font-size: 1.25em;
`;

export const PostTimeRead = styled.p`
  font-style: italic;
`;
