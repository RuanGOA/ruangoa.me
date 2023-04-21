import Image from 'next/image';
import Link from 'next/link';

import portfolioIcon  from "./assets/icon.svg";
import PageSelect from "../PageSelect/"

export default function Header() {
  return (
    <header className="bg-background-dark max-w p-6 flex justify-between flex-col md:flex-row gap-8 items-center md:justify-between">
      <div className="flex gap-4">
        <Link href="/">
          <Image
            priority
            className="w-16 h-auto cursor-pointer"
            src={portfolioIcon}
            alt="Go to home"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <p className="text-text-color-dark text-lg lg:text-xl font-semibold">Ruan Gomes</p>
          <p className="text-text-color-dark text-lg lg:text-xl font-normal">Reliability Researcher</p>
        </div>
      </div>
      <PageSelect />
    </header>
  )
}