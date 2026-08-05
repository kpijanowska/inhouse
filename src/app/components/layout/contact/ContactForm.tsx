export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-zinc-900">
        Napisz do nas
      </h2>

      <p className="mt-3 text-zinc-600">
        Wypełnij formularz, a skontaktujemy się z Tobą najszybciej jak to możliwe.
      </p>

      <form className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-zinc-700"
            >
              Imię i nazwisko
            </label>

            <input
              id="name"
              type="text"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-zinc-700"
          >
            Wiadomość
          </label>

          <textarea
            id="message"
            rows={6}
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-amber-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-zinc-900 px-8 py-4 text-white transition hover:bg-zinc-800"
        >
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}