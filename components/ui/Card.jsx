import Image from "next/image";
import { cn } from "@/lib/utils";
import { imagePlaceholder } from "@/public/images";

export default function Card({ className }) {
  return (
    <div className="rounded-2xl flex overflow-hidden">
      <div
        className={cn(
          `flex-1 bg-black p-4 md:p-6 flex flex-col justify-between text-white`,
          className
        )}
      >
        <h5 className="font-bold">Modern Museum</h5>
        <h3 className="text-3xl font-bold">
          Lorem ipsum <br /> dolor sit amet
        </h3>
        <h5>NFT Platform</h5>
      </div>

      <div className="flex-1">
        <Image
          src={imagePlaceholder}
          alt="placeholder"
          className="w-full h-[300px] object-cover"
        />
      </div>
    </div>
  );
}
