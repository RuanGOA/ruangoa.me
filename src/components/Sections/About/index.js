import React from "react";

import { useConfig } from "../../../contexts/config.context";

import { SectionComponent } from "../index";

import { Text } from "../styled";

export default function About() {
  const { getFieldData } = useConfig();

  const data = getFieldData("about");

  return (
    <>
      {data.map((section, index) => (
        <SectionComponent title={section.title} key={index}>
          {section.text.map((text, index) => (
            <Text key={index}>{text}</Text>
          ))}
        </SectionComponent>
      ))}
    </>
  );
}
