// Komponen dengan props: href dan children (teks tombol)
export default function Button({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full bg-sun px-6 py-3 font-medium text-ink hover:bg-[#f5b93a] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}
