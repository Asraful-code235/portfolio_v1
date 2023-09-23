import { ChevronRight } from "lucide-react";

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
      <p className="py-4">AMET CONSECTUR ENIM DOLOR</p>
    </section>
  );
}
