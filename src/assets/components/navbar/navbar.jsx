import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "My Campaign", href: "#" },
    { name: "About", href: "#" },
    { name: "Join the Movement", href: "#" },
  ];

  return (
    <>
      <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-250">
        <div className="flex items-center justify-between gap-8 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-lg shadow-lg">
          
          {/* Logo */}
          <img
            src="https://i.postimg.cc/sxw5pc6h/UGM-Symbol-Icon-2048x1170.webp"
            alt="Njoroge wa Mbaikia Logo"
            className="w-12 h-12 object-contain text-[#89E900]"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-between w-[500px] gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-black transition hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-3 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg md:hidden">
            <ul className="flex flex-col p-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-3 text-white hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}