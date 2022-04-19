import React from 'react';

import {
  ProfilePicture
} from './styled';

import profilePicturePath from './pic.jpeg';

export default function ProfileImage() {
  return (
    <ProfilePicture src={profilePicturePath} />
  );
}
