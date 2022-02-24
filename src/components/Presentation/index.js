import React from 'react';

import LogoName from '../LogoName';
import ProfileImage from '../ProfileImage';
import JobTitle from '../JobTitle';
import SocialButtons from '../SocialButtons';

export default function Presentation({ isPresentationPage }) {
  return (
    <>
      <LogoName isPresentationPage={isPresentationPage} />
      <ProfileImage />
      <JobTitle />
      <SocialButtons isPresentationPage={isPresentationPage} />
    </>
  );
}
