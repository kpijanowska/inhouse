import { AlarmClockCheck, Hammer, HardHat, Wallet } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: AlarmClockCheck,
            title: "Terminowość",
            description: "Każdy etap realizujemy zgodnie z ustalonym harmonogramem."
        },
        {
            icon: Hammer,
            title: "Kompleksowe usługi",
            description: "Oferujemy pełen zakres usług budowlanych i wykończeniowych."
        },
        {
            icon: HardHat,
            title: "Zaufani wykonawcy",
            description: "Nasza ekipa składa się z doświadczonych specjalistów."
        },
        {
            icon: Wallet,
            title: "Określony budżet",
            description: "Dbamy o realizację zgodnie z ustalonym budżetem."
        }
    ];

  return (
    <section className="bg-gray-100 pt-20 pb-12">
  <div className="mx-auto max-w-7xl px-8" >

    <h2 className="text-center text-4xl font-bold">
      Dlaczego warto nas wybrać?
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-center text-gray-600">
      Oferujemy kompleksowe usługi budowlane i wykończeniowe,
      dbając o najwyższą jakość wykonania oraz terminowość.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"></div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {features.map((feature) => {
      const Icon = feature.icon;
      

      
    return (
      <div
        key={feature.title}
        className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <Icon className="mb-6 h-12 w-12 text-lime-700" strokeWidth={1.25} />

        <h3 className="text-2xl font-semibold">
          {feature.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {feature.description}
        </p>
      </div>
    );
  })}
</div>
  </div>
</section>
  );
}