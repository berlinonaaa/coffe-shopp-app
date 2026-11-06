import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import Button from "@/components/Button";
import { items } from "@/data/menu";
import { visitInfo } from "@/data/visit";

export default function Home() {
  const { address, hours, contact } = visitInfo;
  const previewItems = items.slice(0, 3);

  return (
    <main>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Menu preview ── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex items-end justify-between">
            <h2 className="font-head text-3xl font-semibold">Our favorites</h2>
            <Button href="/menu">See full menu</Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit preview ── */}
      <section className="bg-sea py-12 text-white sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex items-end justify-between">
            <h2 className="font-head text-3xl font-semibold">Visit us</h2>
            <Button href="/visit">Get directions</Button>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div>
              <h3 className="font-head text-xl font-semibold">Address</h3>
              <p>{address}</p>
            </div>
            <div>
              <h3 className="font-head text-xl font-semibold">Hours</h3>
              {hours.map(({ days, time }) => (
                <p key={days}>{days} {time}</p>
              ))}
            </div>
            <div>
              <h3 className="font-head text-xl font-semibold">Contact</h3>
              <p>{contact.email}<br />{contact.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Order ── */}
      <section id="order" className="py-12 text-center sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="font-head text-3xl font-semibold">Ready for your next cup?</h2>
          <p className="mb-6 mt-3">Order ahead and skip the line.</p>
          <Button href="/order">Send an order</Button>
        </div>
      </section>
    </main>
  );
}
