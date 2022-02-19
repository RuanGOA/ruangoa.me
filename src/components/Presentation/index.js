import React from 'react';

import LogoName from '../LogoName';
import ProfileImage from '../ProfileImage';
import JobTitle from '../JobTitle';
import SocialButtons from '../SocialButtons';

export default function Presentation() {
  return (
    <>
      <LogoName />
      <ProfileImage />
      <JobTitle />
      <SocialButtons />
    </>
  );
}
