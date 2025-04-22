import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-main py-4 mt-8 items-center justify-center text-center text-black">
      <p className="text-md">
        Made by{' '}
        <Link
          href="https://www.linkedin.com/in/ruangoa/"
          target="_blank"
          className="font-bold underline transition cursor-pointer"
        >
          Ruan Gomes
        </Link>{' '}
        | {new Date().getFullYear()}
      </p>
    </footer>
  );
}
