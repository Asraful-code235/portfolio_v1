import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/constants/homePage";
import logos from "@/public/images/logos.png";

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-black"
    >
      <div className="pr-12 pb-8 md:pb-0 flex-[2] flex flex-col justify-between gap-y-8">
        <p className="text-sm md:text-3xl">
          Carte Blanche Studio and its projects have been profiled in
          publications such as Entrepreneur, Fast Company, New York Magazine,
          and Forbes.
        </p>
        <Image src={logos} alt="brand-logos" className="w-full" />
      </div>

      <ul className="md:pl-12 pt-8 md:pt-0 flex-1 space-y-8">
        {features.map((feature, i) => (
          <li
            key={feature.title}
            className={`${i !== 2 ? "border-b-2" : ""} border-black`}
          >
            <div className="flex justify-between items-center">
              <h5 className="font-bold">{feature.title}</h5>
              <ArrowUpRight />
            </div>

            <p className={`${i !== 2 ? "py-8" : "pt-8"} text-sm sm:text-base`}>
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
