import Card from "@/components/ui/Card";
import { cardsData } from "@/constants/homePage";

export default function Cards() {
  return (
    <section id="cards" className="grid md:grid-cols-2 gap-4">
      {cardsData.slice(0, 2).map((card) => (
        <Card key={card.name} {...card} />
      ))}
    </section>
  );
}
