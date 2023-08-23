import Colors from "@/components/courts/colors/colors";
import Hero from "@/components/courts/hero/hero";
import Surfaces from "@/components/courts/surfaces/surfaces";
import Video from "@/components/courts/video/video";
import Contact from "@/components/courts/contact/contact";

export default function CourtsPage() {
  return (
    <main>
      <Hero />
      <Video />
      <Colors />
      <Surfaces />
      <Contact />
    </main>
  );
}
