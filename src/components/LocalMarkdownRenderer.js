import ReactMarkdown from 'react-markdown';

function LinkRenderer({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function LocalMarkdownRenderer({ children }) {
  return (
    <div className="max-w-none w-full lg:w-2/3 p-4 lg:p-0 prose dark:prose-invert justify-center">
      <ReactMarkdown components={{ a: LinkRenderer }}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
