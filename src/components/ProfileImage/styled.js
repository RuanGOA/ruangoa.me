import styled from 'styled-components';

export const ProfilePicture = styled.img`
  width: var(--profile-image-size);
  height: auto; 
  border-radius: 25px;
  border: 3px solid var(--highlight-color);
  transition: all 0.5s;

  @media (max-width: 1024px) {
    width: var(--profile-image-size-mobile);
	}
`;
