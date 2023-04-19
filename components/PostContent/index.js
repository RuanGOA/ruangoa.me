import { remark } from 'remark';
import html from 'remark-html';

export default function PostContent({ post }) {
  const htmlText = remark().use(html).processSync(post.body).toString();

  return (
    <div className="px-4 lg:px-[22%] max-w bg-background-dark">
      <div className={`px-[3%] py-4 lg:py-12 items-center gap-8 flex-col lg:flex-row lg:justify-center justify-center`}>
        <article dangerouslySetInnerHTML={{ __html: htmlText }} className="!text-white text-justify prose-xl"/>;
      </div>
    </div>
  );
}


