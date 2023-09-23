import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { nike, fourSeasons, mm, nm, fresh } from "@/public/images";

export default function DarkCard() {
  return (
    <section
      id="dark-card"
      className="px-4 rounded-2xl border-2 bg-black text-white border-black divide-y-2 divide-white text-[3.5vw]"
    >
      <p className="flex items-center gap-x-3 md:gap-x-6 py-4">
        IT’S DIFFICULT TO
        <span className="flex-1 text-center border-2 border-white p-1 rounded-lg">
          BELIEVE
        </span>
        IN OUR IDEAS
      </p>

      <p className="flex items-center gap-x-3 md:gap-x-6 py-4">
        BUT <span className="flex-1 h-[2px] bg-white" />
        <ChevronRight className="-ml-7 md:-ml-10" /> REALIZED ONES
      </p>

      <p className="flex flex-wrap items-center gap-x-3 md:gap-x-6 py-4">
        {/* <span className="flex-1 flex border border-white">
          <Image src={nike} alt="nike" className="w-full" />
          <Image src={fourSeasons} alt="fourSeasons" className="w-full" />
          <Image src={mm} alt="mm" className="w-full" />
          <Image src={nm} alt="nm" className="w-full" />
          <Image src={fresh} alt="fresh" className="w-full" />
        </span> */}
        CANNOT BE
        <span className="flex-1 text-center border-2 border-white p-1 rounded-lg">
          FORGOTTEN
        </span>
      </p>
    </section>
  );
}
