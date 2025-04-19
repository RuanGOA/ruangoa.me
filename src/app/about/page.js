import LocalMarkdownRenderer from '@/components/LocalMarkdownRenderer';

import fs from 'fs/promises';
import path from 'path';

export async function generateMetadata({ params }) {
  return {
    title: `Ruangoa - About`,
  }
}

export default async function About() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'about.md');
  const markdown = await fs.readFile(filePath, 'utf-8');

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <LocalMarkdownRenderer>
          {markdown}
        </LocalMarkdownRenderer>
      </div>
    </div>
  );
}
