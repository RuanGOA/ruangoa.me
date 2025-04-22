import Image from 'next/image';
import Link from 'next/link';

import Menu from '@/components/Menu';
import Theme from '@/components/Theme';
import Icon from '@/assets/icon.svg';

export default function Header() {
  return (
    <header className="w-full py-8 px-4 flex lg:justify-between items-center border-b-1 border-secundary mb-8">
      <div className="gap-4 items-center hidden lg:flex">
        <Link href="/">
          <Image
            priority
            className="w-4 lg:w-12 cursor-pointer"
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
