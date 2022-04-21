import styled from 'styled-components';

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;

  vertical-align: top;

  padding: 0 15%;

  grid-column: 1 / -1;

  color: var(--text-color-${props => props.theme});
  font-size: var(--text-font-size);

  h1 {
    font-size: var(--h1-font-size);
    font-weight: 700;
  }

  h2 {
    font-size: var(--h2-font-size);
    font-weight: 600;
  }

  h3 {
    font-size: var(--h3-font-size);
    font-weight: 600;
  }

  h4 {
    font-size: var(--h4-font-size);
    font-weight: 600;
  }

  p {
    text-align: justify;
  }

  code {
    color: var(--highlight-color);
    background: #333;
    padding: 0.1em 0.15em;
    border-radius: 5px;
  }

  a {
    font-weight: 600;
    color: var(--highlight-color);
    text-decoration: underline;
  }

  ul {
    margin-top: 0.25em;
    list-style-position: inside;
    & > li {
    margin-bottom: 0.25em;
      li {
        padding-left: 1em;
      }
    }
  }

  code {
    overflow-wrap: break-word;
  }

  blockquote {
    color: var(--highlight-color);
    background: #333;
    padding: 1em; 
    margin: 0.5em 0px; 
    border-radius: 0.3em;
    text-align: left;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;

    font-size: var(--text-font-size-mobile);

    h1 {
      font-size: var(--h1-font-size-mobile);
      font-weight: 700;
    }

    h2 {
      font-size: var(--h2-font-size-mobile);
      font-weight: 600;
    }

    h3 {
      font-size: var(--h3-font-size-mobile);
    }

    h4 {
      font-size: var(--h4-font-size-mobile);
    }

    p {
      text-align: justify;
    }

    ul {
      margin-top: 0.15vh;
      list-style-position: inside;
      & > li {
      margin-bottom: 0.15vh;
        li {
          padding-left: 2vw;
        }
      }
    }
  }

  transition: all 0.5s;
`;

export const LoadingContainer = styled.div`
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
