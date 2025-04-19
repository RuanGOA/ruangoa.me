import Image from 'next/image';

import LoadGif from "@/assets/loading.svg";

export default function Loading() {
  return (
    <div className="w-full pt-12 flex justify-center items-center">
      <Image
        className="rounded-lg"
        width={125}
        height={125}
        src={LoadGif}
        alt="Loading gif..."
      />
    </div>
  );
}
