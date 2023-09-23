import Image from "next/image";
import { cn } from "@/lib/utils";
import { productPlaceholder } from "@/public/images";

export default function Card({ className }) {
  return (
    <div className="rounded-2xl flex overflow-hidden">
      <div
        className={cn(
          `flex-1 bg-black p-4 md:p-6 flex flex-col justify-between text-white`,
          className
        )}
      >
        <h5 className="font-bold text-sm md:text-base">Modern Museum</h5>
        <h3 className="text-xl lg:text-3xl font-bold">
          Lorem ipsum <br /> dolor sit amet
        </h3>
        <h5 className="text-sm md:text-base ">NFT Platform</h5>
      </div>

      <div className="flex-1">
        <Image
          src={productPlaceholder}
          alt="placeholder"
          className="w-full h-[300px] object-cover"
        />
      </div>
    </div>
  );
}
