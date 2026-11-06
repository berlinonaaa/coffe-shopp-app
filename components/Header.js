import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-ink text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <span className="font-head text-xl font-extrabold">Coffe Shop</span>
        <nav className="flex gap-4 sm:gap-5">
          <Link href="/" className="hover:text-sun">
            Home
          </Link>
          <Link href="/menu" className="hover:text-sun">
            Menu
          </Link>
          <Link href="/visit" className="hover:text-sun">
            Visit
          </Link>
          <Link href="/order" className="hover:text-sun">
            Order
          </Link>
        </nav>
      </div>
    </header>
  );
}