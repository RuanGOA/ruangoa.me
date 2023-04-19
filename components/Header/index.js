import Image from 'next/image';

import portfolioIcon  from "./assets/icon.svg";
import PageSelect from "../PageSelect/"

export default function Header() {
  return (
    <header className="bg-background-dark max-w p-6 flex justify-between flex-col md:flex-row gap-8 items-center md:justify-between">
      <div className="flex gap-4">
        <Image
          priority
          className="w-16 h-auto cursor-pointer"
          src={portfolioIcon}
          alt="Go to home"
        />
        <div className="flex flex-col justify-center">
          <p className="text-text-color-dark text-xl font-semibold">Ruan Gomes</p>
          <p className="text-text-color-dark text-xl font-normal">Reliability Researcher</p>
        </div>
      </div>
      <PageSelect />
    </header>
  )
}
