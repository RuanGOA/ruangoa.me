import Section from "../Section/";
import SubSection from "../SubSection/";
import ListItem from "../ListItem/";

import { sectionFuture } from "../../data/data";

export default function SectionFuture() {
  return (
    <Section border={false} flex={false} bigSpace={false}>
      <div className="flex flex-col gap-4 text-justify lg:text-left text-white">
        <h2 className="text-3xl font-semibold text-highlight self-start">
          {sectionFuture.title}
        </h2>
        <p className="text">{sectionFuture.text}</p>
        <SubSection>
          {sectionFuture.points.map((item, i) => (
            <ListItem key={i}>
              <p className="text">{item}</p>
            </ListItem>
          ))}
        </SubSection>
      </div>
    </Section>
  )
}
