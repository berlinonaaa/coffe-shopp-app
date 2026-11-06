import { visitInfo } from "@/data/visit";

export default function Visit() {
  const { address, hours, contact } = visitInfo;

  return (
    <section id="visit" className="bg-sea py-50 text-white sm:py-50">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-head text-3xl font-semibold">Visit us</h2>
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
  );
}
