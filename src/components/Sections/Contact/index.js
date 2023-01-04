import React from "react";

import { SectionComponent } from "../index";

import { useConfig } from "../../../contexts/config.context";

import { Link, List, ItemList, Text } from "../styled";

export default function Contact() {
  const { theme, getFieldData } = useConfig();

  const data = getFieldData("contact");

  return (
    <SectionComponent id="contact" title={data["title"]}>
      {data.text.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
      <List className="dotted">
        {Object.entries(data["urls"]).map(([key, url]) => (
          <ItemList key={key} className="dotted" theme={theme}>
            <Link href={url} target="_blank" rel="noreferrer">
              {key}
            </Link>
          </ItemList>
        ))}
      </List>
    </SectionComponent>
  );
}
