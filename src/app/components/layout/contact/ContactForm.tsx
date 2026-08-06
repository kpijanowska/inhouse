export default function ContactForm() {
  return (
    <form className="mt-12 space-y-8">

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label
            htmlFor="firstName"
            className="mb-3 block text-sm font-medium text-zinc-700"
          >
            Imię
          </label>

          <input
            id="firstName"
            type="text"
            className="w-full rounded-xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-lime-700"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-3 block text-sm font-medium text-zinc-700"
          >
            Nazwisko
          </label>

          <input
            id="lastName"
            type="text"
            className="w-full rounded-xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-lime-700"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-3 block text-sm font-medium text-zinc-700"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            className="w-full rounded-xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-lime-700"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-3 block text-sm font-medium text-zinc-700"
          >
            Telefon
          </label>

          <input
            id="phone"
            type="tel"
            className="w-full rounded-xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-lime-700"
          />
        </div>

      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-3 block text-sm font-medium text-zinc-700"
        >
          Wiadomość
        </label>

        <textarea
          id="message"
          rows={7}
          className="w-full rounded-xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-lime-700"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-lime-700 px-8 py-4 font-medium text-white transition hover:bg-lime-800"
      >
        Wyślij wiadomość
      </button>

    </form>
  );
}