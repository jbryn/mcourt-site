import Colors from "@/components/courts/colors/colors";
import Hero from "@/components/shared/hero/hero";
import Surfaces from "@/components/courts/surfaces/surfaces";
import Video from "@/components/courts/video/video";
import Contact from "@/components/courts/contact/contact";

export default function CourtsPage() {
  return (
    <main>
      <Hero
        backgroundUrl={"./img/courts-hero.png"}
        title="Korty"
        subtitle={`Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.`}
      />
      <Video />
      <Colors />
      <Surfaces />
      <Contact />
    </main>
  );
}
