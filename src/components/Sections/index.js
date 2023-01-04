import React from "react";

import { useConfig } from "../../contexts/config.context";

import { Section, SectionName } from "./styled";

export function SectionComponent(props) {
  const { theme, contactRef } = useConfig();

  return (
    <Section theme={theme}>
      <SectionName ref={contactRef} id={props.id}>
        {props.title}
      </SectionName>
      {props.children}
    </Section>
  );
}
