import Link from 'next/link'

import { pageSelect } from '../../data/data';

export default function PageSelect() {
  return (
    <nav className="flex gap-3 items-center">
      {pageSelect.map((item, i) => (
        <Link key={i} href={item.url}>
          <p className="text text-black py-[0.05em] px-2 bg-highlight lg:text-lg rounded-md cursor-pointer hover:scale-110 transition-scale duration-1000">{item.title}</p>
        </Link>
      ))}
    </nav>
  );
}
