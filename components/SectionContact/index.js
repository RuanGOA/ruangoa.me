import Section from "../Section/";
import SubSection from "../SubSection/";
import ListItem from "../ListItem/";

import { sectionContact } from "../../data/data";

export default function SectionContact() {
  return (
    <Section border={false} flex={false}>
      <div className="flex flex-col gap-4 text-justify lg:text-left text-white">
        <h2 className="text-3xl font-semibold text-highlight self-start">
          {sectionContact.title}
        </h2>
        <p className="text-lg">{sectionContact.text}</p>
        <SubSection>
          {sectionContact.links.map((item, i) => (
            <ListItem key={i}>
              <a className="underline" href={item.url} target="_blank">{item.title}</a>
            </ListItem>
          ))}
        </SubSection>
      </div>
    </Section>
  )
}
