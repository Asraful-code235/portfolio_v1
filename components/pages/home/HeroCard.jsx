import { ChevronRight } from "lucide-react";

export default function HeroCard() {
  return (
    <section
      id="hero-card"
      className="px-4 rounded-2xl border-2 border-black divide-y-2 divide-black text-[5vw]"
    >
      <p className="flex items-center gap-x-6 py-4">
        LOREM IPSUM DOLOR <div className="flex-1 h-[2px] bg-black" />
        <ChevronRight className="-ml-10" />
        SIT
      </p>

      <p className="py-4">AMET CONSECTUR ENIM DOLOR</p>
      <p className="flex items-center gap-x-6 py-4">
        ULTRICES <div className="flex-1 h-[2px] bg-black" />
        <ChevronRight className="-ml-10" /> SED
        <span className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. <br /> Ante quis est lectus
          viverra sagittis sed.
        </span>
      </p>
    </section>
  );
}
