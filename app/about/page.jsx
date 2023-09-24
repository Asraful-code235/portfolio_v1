import PageContainer from "@/components/ui/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer className="space-y-6 md:space-y-10 text-sm md:text-base">
      <header className="flex flex-col gap-6">
        <h3 className="text-xl">
          Lorem ipsum dolor sit, amet consectetur Libe ro vulputate
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Consequat pellentesque lorem
          non nibh et. Pellentesque nec proin maecenas lorem.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur. Consequat pellentesque lorem
          non nibh et. Pellentesque nec proin maecenas lorem.
        </p>
      </header>

      <div className="h-[200px] bg-gray-100 rounded-lg border"></div>

      <section className="divide-y-2 divide-black border-y-2 border-black">
        {[...Array(3).keys()].map((item) => (
          <div key={item} className="flex flex-col gap-4 py-4">
            <h3 className="text-xl">Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <div className="h-[200px] bg-gray-100 rounded-lg border"></div>

        <div className="space-y-6">
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

      <section className="space-y-4 py-6 border-y-2 border-black">
        <h3 className="text-xl">Lorem ipsum dolor sit amet.</h3>
        <div className="space-y-4">
          {[...Array(3).keys()].map((item) => (
            <p key={item}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque hendrerit
              arcu aliquet rhoncus congue neque sed dolor. Sollicitudin donec
              erat blandit morbi sed. Eu habitasse eu lorem vestibulum ornare
              nisl ut.
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl">Our past clients </h3>
        <div className="flex gap-3 overflow-x-scroll scrollbar-hidden">
          {[...Array(8).keys()].map((item) => (
            <div
              key={item}
              className="shrink-0 w-32 h-32 bg-gray-100 rounded-lg border"
            ></div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
