import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

export default function CardPlus({ data }) {
  return (
    <div className="py-4 md:py-10 flex flex-col md:flex-row gap-8">
      <Card {...data} />

      <div className="flex-1 flex flex-col justify-between gap-6 text-sm md:text-base">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-3xl">{data.name}</h2>
            <Link href="#" className="flex items-center gap-2">
              View Project
              <ArrowUpRight className="w-4" />
            </Link>
          </div>
          <p>{data.year}</p>
          <p>{data.description}</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          {data.buttons.map((btn) => (
            <Button variant="light" key={btn}>
              {btn}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
