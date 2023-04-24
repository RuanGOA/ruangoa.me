import PostContent from "../../components/PostContent";

export async function generateMetadata({ params }) {
  return {
    title: `Post | RuanGOA`,
  }
}

export default function Post() {
  return (
    <main className="max-w min-h-screen bg-background-dark">
      <PostContent />
    </main>
  )
}
