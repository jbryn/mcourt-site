import Hero from "@/components/shared/hero/hero";

export default function CourtsPage() {
  return (
    <main className="overflow-hidden">
      <Hero
        backgroundUrl={"/img/courts-hero.png"}
        title="Oświetlenie kortów"
        subtitle={`Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.`}
      />
    </main>
  );
}