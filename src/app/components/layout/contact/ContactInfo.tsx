import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+48 123 456 789",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kontakt@inhouse.pl",
    },
    {
      icon: MapPin,
      label: "Lokalizacja",
      value: "Kraków, Małopolska",
    },
  ];

  return (
    <div className="bg-gray-100 p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
        Dane kontaktowe
      </p>

      <h2 className="mt-4 text-4xl font-bold text-zinc-900">
        Jesteśmy do Twojej dyspozycji
      </h2>

      <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600">
        Skontaktuj się z nami telefonicznie lub mailowo.
        Chętnie odpowiemy na wszystkie pytania oraz przygotujemy
        indywidualną wycenę Twojej inwestycji.
      </p>

      <div className="mt-12 space-y-8">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;

          return (
            <div
              key={detail.label}
              className="flex items-start gap-5"
            >
              <div className="rounded-full bg-amber-100 p-3">
                <Icon className="h-5 w-5 text-amber-500" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {detail.label}
                </h3>

                <p className="mt-1 text-zinc-600">
                  {detail.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}