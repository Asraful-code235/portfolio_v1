import Card from "@/components/ui/Card";

export default function Cards() {
  return (
    <section id="cards" className="grid sm:grid-cols-2 gap-4">
      <Card className="bg-pink-500" />
      <Card />
    </section>
  );
}
