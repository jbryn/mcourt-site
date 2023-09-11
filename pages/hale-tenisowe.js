import Contact from "@/components/courts/contact/contact";
import About from "@/components/tennis-halls/about/about";
import Description from "@/components/tennis-halls/description/description";
import Hero from "@/components/shared/hero/hero";

export default function TennisHalls() {
  return (
    <main>
      <Hero
        backgroundUrl={"/img/tennis-halls/hero.png"}
        title="Hale tenisowe"
        subtitle={`Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.`}
      />
      <About />
      <Description />
      <Contact />
    </main>
  );
}
