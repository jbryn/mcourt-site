import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";

export default function CourtsPage() {
  return (
    <main className="overflow-hidden">
      <Hero
        backgroundUrl={"/img/courts-hero.png"}
        title="Padel"
        subtitle={`Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.`}
      />
      <Contact />
    </main>
  );
}
