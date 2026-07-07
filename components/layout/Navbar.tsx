import Link from "next/link";

const links = [
  { name: "Buy", href: "#" },
  { name: "Rent", href: "#" },
  { name: "Commercial", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-3xl font-bold text-teal-700">
          🌲 PropPine
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 transition-colors hover:text-teal-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border px-4 py-2">
            Login
          </button>

          <button className="rounded-xl bg-teal-700 px-5 py-2 text-white hover:bg-teal-800">
            Post Property
          </button>
        </div>
      </div>
    </header>
  );
}