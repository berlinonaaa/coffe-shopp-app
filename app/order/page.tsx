export const metadata = { title: "Order – Kopi Senja" };

export default function OrderPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 sm:py-16">
      <h1 className="font-head text-4xl font-extrabold">Order for pickup</h1>
      <p className="mt-3 text-[#5a7a77]">
        Fill in the form below and we&apos;ll have your order ready when you arrive.
      </p>

      <form
        action="mailto:hello@kopisenja.example"
        method="get"
        className="mt-10 flex flex-col gap-5"
      >
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Budi Santoso"
            className="rounded-xl border border-[#cfdcd9] bg-mist px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sea"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="font-medium">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. +62 812 3456 7890"
            className="rounded-xl border border-[#cfdcd9] bg-mist px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sea"
          />
        </div>

        {/* Pickup time */}
        <div className="flex flex-col gap-1">
          <label htmlFor="pickup" className="font-medium">
            Pickup time
          </label>
          <input
            id="pickup"
            name="pickup"
            type="time"
            required
            className="rounded-xl border border-[#cfdcd9] bg-mist px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sea"
          />
        </div>

        {/* Order details */}
        <div className="flex flex-col gap-1">
          <label htmlFor="order" className="font-medium">
            What would you like?
          </label>
          <textarea
            id="order"
            name="order"
            rows={4}
            required
            placeholder="e.g. 1x Flat White, 2x Cold Brew, 1x Butter Croissant"
            className="rounded-xl border border-[#cfdcd9] bg-mist px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sea resize-none"
          />
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1">
          <label htmlFor="notes" className="font-medium">
            Notes{" "}
            <span className="font-normal text-[#5a7a77]">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            placeholder="e.g. extra shot, oat milk, no sugar"
            className="rounded-xl border border-[#cfdcd9] bg-mist px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sea resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-full bg-sun px-6 py-3 font-medium text-ink hover:bg-[#f5b93a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
        >
          Send order
        </button>
      </form>
    </main>
  );
}
