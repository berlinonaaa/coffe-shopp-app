import MenuCard from "./MenuCard";
import { items } from "@/data/menu";

export default function MenuSection() {
  return (
    <section id="menu" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-head text-3xl font-semibold">Our favorites</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
