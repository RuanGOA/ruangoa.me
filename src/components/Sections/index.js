import React from 'react';

import {
  Section,
  SectionName
} from './styled';

export default function SectionComponent(props) {
  return (
    <Section> 
      <SectionName>
        {props.title}
      </SectionName>
      {props.children}
    </Section>
  );
}
