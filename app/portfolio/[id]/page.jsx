import Image from "next/image";
import PageContainer from "@/components/ui/PageContainer";
import { productPlaceholder } from "@/public/images";

export default function PortfolioDetails() {
  return (
    <PageContainer className="space-y-6 md:space-y-10">
      <Image
        src={productPlaceholder}
        alt="portfolio-banner"
        className="w-full rounded-lg"
      />

      <section className="text-sm md:text-base space-y-6 md:space-y-10">
        <h3 className="pb-3 md:pb-8 border-b-2 border-black text-xl md:text-[32px]">
          La Mèmoire
        </h3>

        <div className="flex flex-col md:flex-row md:divide-x-2 divide-black">
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
    </PageContainer>
  );
}
