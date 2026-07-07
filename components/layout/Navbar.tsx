import Link from "next/link";

const navLinks = [
  { name: "Buy", href: "/buy" },
  { name: "Rent", href: "/rent" },
  { name: "Commercial", href: "/commercial" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🌲</span>
          <span className="text-2xl font-bold text-teal-700">
            PropPine
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium hover:text-teal-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100">
            Login
          </button>

          <button className="rounded-xl bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-800">
            Post Property
          </button>
        </div>
      </div>
    </header>
  );
}