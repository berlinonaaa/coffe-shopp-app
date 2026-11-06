import Button from "./Button";

export default function Cta() {
  return (
    <section id="order" className="py-12 text-center sm:py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-head text-3xl font-semibold">Ready for your next cup?</h2>
        <p className="mb-6 mt-3">Order ahead and skip the line.</p>
        <Button href="/order">Send an order</Button>
      </div>
    </section>
  );
}
