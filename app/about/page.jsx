import PageContainer from "@/components/ui/PageContainer";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <PageContainer className="space-y-6 md:space-y-10 text-sm md:text-base">
      <header className="flex flex-col gap-6">
        <h3 className="text-xl lg:text-7xl lg:leading-[96px] uppercase">
          Lorem ipsum dolor sit,
          <br />
          amet consectetur Libe
          <span className="lg:flex justify-between gap-4">
            <span className="flex-1">ro vulputate</span>
            <span className="hidden lg:flex flex-1 gap-4 text-base">
              <span>
                Lorem ipsum dolor sit amet consectetur. Consequat pellentesque
                lorem non nibh et. Pellentesque nec proin maecenas lorem.
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur. Consequat pellentesque
                lorem non nibh et. Pellentesque nec proin maecenas lorem.
              </span>
            </span>
          </span>
        </h3>

        <div className="lg:hidden space-y-6">
          <p>
            Lorem ipsum dolor sit amet consectetur. Consequat pellentesque lorem
            non nibh et. Pellentesque nec proin maecenas lorem.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Consequat pellentesque lorem
            non nibh et. Pellentesque nec proin maecenas lorem.
          </p>
        </div>
      </header>

      <div className="h-[200px] md:h-[360px] bg-gray-100 rounded-lg border"></div>

      <section className="divide-y-2 divide-black border-y-2 border-black">
        {[...Array(3).keys()].map((item) => (
          <div
            key={item}
            className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4 md:py-8"
          >
            <h3 className="text-xl md:text-3xl">Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <div className="md:flex-[2] h-[200px] md:h-[360px] bg-gray-100 rounded-lg border"></div>

        <div className="space-y-6 md:flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque hendrerit arcu
            aliquet rhoncus congue neque sed dolor. Sollicitudin donec erat
            blandit morbi sed. Eu habitasse eu lorem vestibulum ornare nisl ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque hendrerit arcu
            aliquet rhoncus congue neque sed dolor. Sollicitudin donec erat
            blandit morbi sed. Eu habitasse eu lorem vestibulum ornare nisl ut.
          </p>
        </div>
      </section>

      <section className="space-y-4 border-y-2 border-black md:border-y-0 py-6 md:py-0">
        <h3 className="text-xl md:text-3xl">Lorem ipsum dolor sit amet.</h3>
        <div className="flex flex-col md:flex-row gap-4 md:divide-x-2 md:divide-black md:border-y-2 border-black md:py-6">
          {[...Array(3).keys()].map((item) => (
            <p key={item} className={item > 0 ? "md:pl-10" : ""}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque hendrerit
              arcu aliquet rhoncus congue neque sed dolor. Sollicitudin donec
              erat blandit morbi sed. Eu habitasse eu lorem vestibulum ornare
              nisl ut.
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl md:text-3xl">Our past clients </h3>
        <div className="flex gap-3 overflow-x-scroll scrollbar-hidden">
          {[...Array(8).keys()].map((item) => (
            <div
              key={item}
              className="shrink-0 w-32 md:w-40 h-32 md:h-40 bg-gray-100 rounded-lg border"
            ></div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
