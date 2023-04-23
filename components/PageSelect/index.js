"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

import { pageSelect } from '../../data/data';

export default function PageSelect(params) {
  const [path, setPath] = useState('');
  const pathname = usePathname();

  const isCurrentPage = (itemTitle) => {
    return itemTitle.toLowerCase() == path;
  }

  useEffect(() => {
    const pathList = pathname.split('/').filter((e) => e != '');
    setPath(pathList.length > 0 ? pathList[0] : 'resume');
  }, [pathname]);

  return (
    <nav className="flex gap-3 items-center">
      {pageSelect.map((item, i) => {
        const isCurrent = isCurrentPage(item.title);

        return (
          <Link key={i} href={item.url}>
            <button
              type="button"
              disabled={isCurrent}
              className={`
              text-black
              py-[0.05em]
              px-2
              rounded-md
              transition-scale
              duration-1000
              bg-${isCurrent ? 'highlight' : 'white'}
              ${!isCurrent && 'hover:scale-110'}
              `}
            >
              {item.title}
            </button>
          </Link>
        )})}
    </nav>
  );
}
