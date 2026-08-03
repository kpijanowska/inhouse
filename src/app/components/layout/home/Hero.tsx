import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
        {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}
      <Image
        src="/images/hero.webp"
        alt="Hero Image"
        fill
        className="object-cover"
      />
<div className="absolute inset-0 bg-black/65 z-10" />
<div className="relative z-20 flex h-full pl-16 pt-24">
  <div>
    <h1 className="text-6xl font-bold text-white pt-10 max-w-2xl">
      Kompleksowe usługi budowlane
    </h1>

    <div className="mt-8 flex gap-4">
      <Button>Nasze realizacje</Button>

      <Button variant="outline">
        Kontakt
      </Button>
    </div>
  </div>
</div>
<div className="absolute bottom-0 right-0 z-20 px-16 pb-12">
  <div className="max-w-md text-right">
    <p className="max-w-md text-lg font-light leading-8 text-gray-100">
      Realizujemy kompleksowe remonty, wykończenia wnętrz oraz prace budowlane
      z dbałością o każdy detal. Stawiamy na terminowość, jakość wykonania i
      pełne zadowolenie naszych klientów.
    </p>
  </div>
  </div>

    </section>
  );
}

//  Realizujemy kompleksowe remonty, wykończenia wnętrz oraz prace budowlane
//       z dbałością o każdy detal. Stawiamy na terminowość, jakość wykonania i
//       pełne zadowolenie naszych klientów.