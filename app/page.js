import Section from "../components/Section/";
import SectionAbout from "../components/SectionAbout/";
import SectionResume from "../components/SectionResume/";
import SectionContact from "../components/SectionContact/";

export async function generateMetadata({ params }) {
  return {
    title: `Resume | RuanGOA`,
  }
}

export default function Home() {
  generateMetadata({ subpage: "Resume" });

  return (
    <main className="max-w">
      <SectionAbout />
      <SectionResume />
      <SectionContact />
    </main>
  )
}
