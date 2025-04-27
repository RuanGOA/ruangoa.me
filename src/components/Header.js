import Image from 'next/image';
import Link from 'next/link';

import Menu from '@/components/Menu';
import Theme from '@/components/Theme';
import Icon from '@/assets/icon.svg';

export default function Header() {
  return (
    <header className="w-full py-6 px-4 flex flex-col lg:flex-row lg:justify-between items-center border-b-1 border-secundary mb-8">
      <div className="gap-4 items-center flex pb-4 lg:pb-0 w-full lg:w-fit">
        <Link href="/">
          <Image
            priority
            className="w-10 lg:w-12 cursor-pointer"
            src={Icon}
            alt="Website's icon"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold">Ruan Gomes</p>
          <p className="text-md">Code your life!</p>
        </div>
      </div>
      <div className="flex gap-6 justify-between lg:justify-center items-center w-full lg:w-fit">
        <Menu />
        <Theme />
      </div>
    </header>
  );
}
