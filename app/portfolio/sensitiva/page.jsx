import Image from "next/image";
import PageContainer from "@/components/ui/PageContainer";
import {
  sensitiva1,
  sensitiva2,
  sensitiva3,
  sensitiva4,
  sensitiva5,
  sensitiva6,
  sensitivaGrid,
  sensitivaHero,
  sensitivaWide,
} from "@/public/images";

export default function Sensitiva() {
  return (
    <PageContainer className="space-y-6 md:space-y-10">
      <Image
        src={sensitivaHero}
        alt="modern-museum"
        className="w-full rounded-lg"
      />

      <section className="text-sm md:text-base space-y-6 md:space-y-10">
        <h3 className="pb-3 md:pb-8 border-b-2 border-black text-xl md:text-[32px]">
          SENSITIVA
        </h3>

        <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x-2 divide-black">
          <div className="md:flex-[1.5] flex flex-col md:flex-row gap-3 md:gap-16 md:pr-16">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl lorem pretium tellus
              a tellus in. Vulputate in habitant elit varius. Duis facilisi sed
              orci sed a urna vel libero. Cras in vitae placerat ultrices. At
              elit urna molestie pellentesque vitae eu mi dignissim nulla.
              Lectus massa eget felis egestas nibh. Quis viverra tempus odio leo
              vehicula.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl lorem pretium tellus
              a tellus in. Vulputate in habitant elit varius. Duis facilisi sed
              orci sed a urna vel libero. Cras in vitae placerat ultrices. At
              elit urna molestie pellentesque vitae eu mi dignissim nulla.
              Lectus massa eget felis egestas nibh. Quis viverra tempus odio leo
              vehicula.
            </p>
          </div>

          <div className="md:flex-1 flex flex-col md:flex-row gap-6 md:gap-16 md:pl-16">
            <div>
              <p className="text-gray-400">Year</p>
              <p className="font-bold">2023</p>
            </div>
            <div>
              <p className="text-gray-400">Services</p>
              <p className="font-bold">
                branding, website design, ui/ux, copywriting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 md:border-t-0 border-black py-6 space-y-6 md:space-y-10">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <Image
            src={sensitiva1}
            alt="window"
            className="col-span-2 rounded-lg"
          />
          <Image
            src={sensitiva2}
            alt="window"
            className="col-span-1 rounded-lg"
          />
          <Image
            src={sensitiva3}
            alt="window"
            className="col-span-1 rounded-lg"
          />
          <Image
            src={sensitiva4}
            alt="window"
            className="col-span-2 rounded-lg"
          />
        </div>

        <p className="text-xl md:text-6xl">
          Lorem ipsum dolor sit amet consectetur. Tempus venenatis eu sagittis
          facilisi malesuada elit cras erat. Dui sit vitae in at ac est in duis.
        </p>
      </section>

      <section className="space-y-6 md:space-y-8">
        <h3 className="text-xl font-medium md:text-[32px] md:pb-8 md:border-b-2 border-black uppercase">
          SENSITIVA
        </h3>
        <div className="flex flex-col md:flex-row gap-3 text-[14px] md:text-base md:divide-x-2 divide-black">
          <p className="md:pr-16 md:text-justify">
            Lorem ipsum dolor sit amet consectetur. Nisl lorem pretium tellus a
            tellus in. Vulputate in habitant elit varius. Duis facilisi sed orci
            sed a urna vel libero. Cras in vitae placerat ultrices. At elit urna
            molestie pellentesque vitae eu mi dignissim nulla. Lectus massa eget
            felis egestas nibh. Quis viverra tempus odio leo vehicula.
          </p>
          <p className="md:pl-16 md:text-justify">
            Lorem ipsum dolor sit amet consectetur. Nisl lorem pretium tellus a
            tellus in. Vulputate in habitant elit varius. Duis facilisi sed orci
            sed a urna vel libero. Cras in vitae placerat ultrices. At elit urna
            molestie pellentesque vitae eu mi dignissim nulla. Lectus massa eget
            felis egestas nibh. Quis viverra tempus odio leo vehicula.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 md:gap-4 border-t-2 md:border-0 border-black pt-6 md:pt-0">
        <Image
          src={sensitivaWide}
          alt="modern-museum-grid"
          className="col-span-2"
        />
        <Image src={sensitiva5} alt="modern-museum-2" className="" />
        <Image src={sensitiva6} alt="modern-museum-2" className="" />
        <Image
          src={sensitivaGrid}
          alt="modern-museum-2"
          className="col-span-2"
        />
      </section>
    </PageContainer>
  );
}
