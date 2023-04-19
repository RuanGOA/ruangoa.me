import pulseGif from "./assets/pulse.svg";

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-full pt-12 flex justify-center items-center">
      <Image
        className="rounded-lg"
        width={125}
        height={125}
        src={pulseGif}
        alt="Pulse svg"
      />
    </div>
  )
}
