import Section from "../Section/";
import SubSection from "../SubSection/";
import ListItem from "../ListItem/";

import { sectionResume } from "../../data/data";

export default function SectionResume() {
  return (
    <Section flex={false}>
      <div className="flex flex-col gap-4 text-justify lg:text-left">
        <h2 className="text-3xl font-semibold text-highlight self-start">
          {sectionResume.title}
        </h2>
        <SubSection title={sectionResume.education.title}>
          {sectionResume.education.text.map((item, i) => (
            <ListItem key={i}>
              <p className="font-semibold">{item.title}</p>
              <p>{item.time}</p>
            </ListItem>
          ))}
        </SubSection>
        <SubSection title={sectionResume.carrer.title}>
          {sectionResume.carrer.text.map((item, i) => (
            <ListItem key={i}>
              <p className="font-semibold">{item.title}</p>
              <p>{item.time}</p>
              <p>{item.description}</p>
            </ListItem>
          ))}
        </SubSection>
        <SubSection title={sectionResume.awards.title}>
          {sectionResume.awards.text.map((item, i) => (
            <ListItem key={i}>
              <a className="underline" href={item.url} target="_blank">{item.title}</a>
            </ListItem>
          ))}
        </SubSection>
        <SubSection title={sectionResume.courses.title}>
          {sectionResume.courses.text.map((item, i) => (
            <ListItem key={i}>
              <a className="underline" href={item.url} target="_blank">{item.title}</a>
            </ListItem>
          ))}
        </SubSection>
      </div>
    </Section>
  )
}
