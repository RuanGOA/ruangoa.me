import SectionMe from "../../components/SectionMe/";
import SectionNow from "../../components/SectionNow/";
import SectionFuture from "../../components/SectionFuture/";

export async function generateMetadata({ params }) {
  return {
    title: `About | RuanGOA`,
  }
}

export default function Home() {
  return (
    <main className="max-w">
      <SectionMe />
      <SectionNow />
      <SectionFuture />
    </main>
  )
}
