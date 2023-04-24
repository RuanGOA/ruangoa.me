import Image from 'next/image';
import Link from 'next/link';

import portfolioIcon  from "./assets/icon.svg";
import PageSelect from "../PageSelect/"

import { name, job } from "../../data/data";

export default function Header() {
  return (
    <header className="bg-background-dark max-w p-6 flex justify-between flex-col md:flex-row gap-8 items-center md:justify-between">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <Image
            priority
            className="h-auto w-12 cursor-pointer"
            src={portfolioIcon}
            alt="Go to home"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <p className="text-text-color-dark text-lg lg:text-xl font-semibold">{name}</p>
          <p className="text-text-color-dark text-lg lg:text-xl font-normal">{job}</p>
        </div>
      </div>
      <PageSelect />
    </header>
  )
}
