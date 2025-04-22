'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const pages = [
    {
      name: "Blog",
      compare: "/",
    },
    {
      name: "About",
      compare: "/about"
    },
    {
      name: "Contact",
      compare: "/contact"
    }
  ];

  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {pages.map((page, i) => {
        const isActive = pathname === page.compare;
        return (
          <Link
            key={page.name+`${i}`}
            href={page.compare}
            className={`text-lg transition-colors ${
              isActive
                ? 'text-main border-b-2'
                : 'text-black dark:text-white'
            }`}
          >
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
}
