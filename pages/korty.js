import Colors from "@/components/courts/colors/colors";
import Hero from "@/components/shared/hero/hero";
import Surfaces from "@/components/courts/surfaces/surfaces";
import Video from "@/components/courts/video/video";
import Contact from "@/components/courts/contact/contact";

export default function CourtsPage() {
  return (
    <main>
      <Hero
        backgroundUrl={"/img/courts/image5.png"}
        title="Korty tenisowe"
        subtitle={`Budowa kortów tenisowych to nasza specjalność. Oferujemy najlepsze nawierzchnie tenisowe i profesjonalizm w każdym projekcie. Skontaktuj się z nami już dziś i wybuduj swój wymarzony kort.`}
      />
      {/* <Video /> */}
      {/* <Colors /> */}
      <Surfaces />
      <Contact />
    </main>
  );
}
