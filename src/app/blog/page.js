import BlogList from "@/components/BlogList";

export async function generateMetadata({ params }) {
  return {
    title: `Ruangoa - Blog`,
  }
}

export default function Blog() {
  return (
    <div className="w-full flex align-center justify-center">
      <BlogList />
    </div>
  );
}
