// Props: name, desc, price
export default function MenuCard({ name, desc, price }) {
  return (
    <div className="rounded-2xl bg-mist p-6">
      <h3 className="mb-1 font-head text-xl font-semibold">{name}</h3>
      <p>{desc}</p>
      <span className="mt-3 block font-medium text-sea">{price}</span>
    </div>
  );
}
