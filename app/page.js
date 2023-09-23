import DarkCard from "@/components/pages/home/DarkCard";
import Features from "@/components/pages/home/Features";
import HeroCard from "@/components/pages/home/HeroCard";
import PageContainer from "@/components/ui/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <div className="space-y-6 md:space-y-10">
        <HeroCard />
        <Features />
        <DarkCard />
        <p className="text-xl md:text-3xl">
          We work with brands of all sizes,
          <br className="md:hidden" /> as well as creating new ones.
        </p>
      </div>
    </PageContainer>
  );
}
