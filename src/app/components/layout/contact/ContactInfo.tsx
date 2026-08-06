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
    <div>
      <p className="text-sm pl-2 font-semibold uppercase tracking-[0.3em] text-lime-700">
        Dane kontaktowe
      </p>

      <h2 className="mt-4 text-5xl font-bold leading-tight text-zinc-900">
        Jesteśmy do Twojej dyspozycji
      </h2>

      <p className="mt-8 max-w-md text-lg leading-8 text-zinc-600">
        Odpowiemy na wszystkie pytania i przygotujemy indywidualną wycenę
        Twojej inwestycji.
      </p>

      <div className="mt-16 space-y-10">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;

          return (
            <div
              key={detail.label}
              className="flex items-start gap-5"
            >
              <Icon className="mt-1 h-5 w-5 text-lime-700" />

              <div>
                <h3 className="font-semibold text-zinc-900">
                  {detail.label}
                </h3>

                <p className="mt-2 text-zinc-600">
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