import Section from "../Section/";
import SubSection from "../SubSection/";
import ListItem from "../ListItem/";

import { sectionNow } from "../../data/data";

export default function SectionNow() {
  return (
    <Section border={false} flex={false} bigSpace={false}>
      <div className="flex flex-col gap-4 text-justify lg:text-left text-white">
        <h2 className="text-3xl font-semibold text-highlight self-start">
          {sectionNow.title}
        </h2>
        {sectionNow.text.map((text, i) => (
          <p key={i} className="text">{text}</p>
        ))}
      </div>
    </Section>
  )
}
