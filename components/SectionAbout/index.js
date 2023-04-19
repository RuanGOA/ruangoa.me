import Image from 'next/image';

import Section from "../Section/";

import profilePic from "./img.jpg";
import { sectionAbout } from "../../data/data";

export default function SectionAbout() {
  return (
    <Section>
      <Image
        className="rounded-lg"
        width={175}
        height={175}
        src={profilePic}
        alt="Go to home"
      />
      <div className="flex flex-col gap-4 text-justify items-center lg:text-left lg:items-start">
        <h2 className="text-3xl font-semibold text-highlight">{sectionAbout.title}</h2>
        {sectionAbout.text.map((text, i) => (
          <p key={i} className="text-text-color-dark">
            {text}
          </p>
        ))}
      </div>
    </Section>
  )
}
