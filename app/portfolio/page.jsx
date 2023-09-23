import Card from "@/components/ui/Card";
import CardPlus from "@/components/ui/CardPlus";
import PageContainer from "@/components/ui/PageContainer";
import Pagination from "@/components/ui/Pagination";
import { cardsData } from "@/constants/homePage";

export default function page() {
  return (
    <PageContainer className="space-y-6 md:space-y-10">
      <Card {...cardsData[1]} />

      <div className="divide-y-2 divide-black">
        {cardsData.map((data) => (
          <CardPlus key={data.name} data={data} />
        ))}
        <Pagination pageCount={4} currentPage={1} onChange={() => {}} />
      </div>
    </PageContainer>
  );
}
