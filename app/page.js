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
      </div>
    </PageContainer>
  );
}
