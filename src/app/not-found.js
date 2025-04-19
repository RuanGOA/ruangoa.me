import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-72 h-72 flex flex-col items-center justify-center bg-main rounded-lg mb-6">
        <span className="text-black text-[6rem] font-extrabold select-none">404</span>
        <div className="text-2xl font-semibold text-black mb-4">Not found</div>
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white rounded transition text-lg underline"
      >
        Go back home
      </Link>
    </div>
  );
}
