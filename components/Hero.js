import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-ink pb-20 pt-16 text-white">
      <div className="mx-auto max-w-5xl px-5">
        <h1 className="max-w-[14ch] font-head text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Coffee roasted fresh every morning.
        </h1>
        <p className="mb-8 mt-5 max-w-[46ch] text-[#cfdcd9]">
          Small-batch beans from local farms, brewed by people who care. Come in for a cup or take a bag home.
        </p>
        <Button href="/order">Order for pickup</Button>
      </div>
    </section>
  );
}
