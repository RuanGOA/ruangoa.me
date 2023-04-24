import Section from "../Section/";
import SubSection from "../SubSection/";
import ListItem from "../ListItem/";

import { sectionMe } from "../../data/data";

export default function SectionMe() {
  return (
    <Section border={false} flex={false} bigSpace={false}>
      <div className="flex flex-col gap-4 text-justify lg:text-left text-white">
        <h2 className="text-3xl font-semibold text-highlight self-start">
          {sectionMe.title}
        </h2>
        <p className="text">{sectionMe.text}</p>
      </div>
    </Section>
  )
}
