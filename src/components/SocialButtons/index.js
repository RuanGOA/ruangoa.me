import React from 'react';

import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./assets/instagram.svg";
import { ReactComponent as EmailIcon } from "./assets/email.svg";

import * as style from './styled';

export default function SocialButtons({isPresentationPage}) {
  return (
    (isPresentationPage) ?
      (
        <style.LinkButtons>
          <style.Icon
            href={"https://github.com/ruangoa/"}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </style.Icon>
          <style.Icon
            href={"https://www.linkedin.com/in/ruangoa/"}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </style.Icon>
          <style.Icon
            href={"https://www.instagram.com/ruangoa/"}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </style.Icon>
          <style.Icon
            href={"mailto:ruangoa0@gmail.com"}
            rel="noreferrer"
          >
            <EmailIcon />
          </style.Icon>
        </style.LinkButtons>
      ) : (
        <></>
      )
  );
}
