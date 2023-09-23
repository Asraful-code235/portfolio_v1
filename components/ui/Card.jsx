import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Card({ bgClassName, name, category, image }) {
  return (
    <div className="flex-1 rounded-2xl flex overflow-hidden">
      <div
        className={cn(
          `flex-1 bg-black p-4 md:p-6 flex flex-col justify-between text-white`,
          bgClassName
        )}
      >
        <h5 className="font-bold text-sm md:text-base">{name}</h5>
        <h3 className="text-xl lg:text-3xl font-bold">
          Lorem ipsum <br /> dolor sit amet
        </h3>
        <h5 className="text-sm md:text-base ">{category}</h5>
      </div>

      <div className="flex-1">
        <Image
          src={image}
          alt="placeholder"
          className="w-full min-h-[176px] md:min-h-[300px] h-full object-cover"
        />
      </div>
    </div>
  );
}
