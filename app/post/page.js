import PostContent from "../../components/PostContent";

export async function generateMetadata({ params }) {
  return {
    title: `@ruangoa - Post`,
  }
}

export default function Post() {
  return (
    <main className="max-w min-h-screen bg-background-dark">
      <PostContent />
    </main>
  )
}
