import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "My Promise", href: "#" },
    { name: "Manifesto", href: "#" },
    { name: "Join the Movement", href: "#" },
  ];

  return (
    <>
      {/* Changed w-250 to a responsive width container */}
      <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-[90%] max-w-[1000px]">
        <div className="flex items-center justify-between gap-8 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-lg shadow-lg">
          
          {/* Logo */}
          <img
            src="https://i.postimg.cc/sxw5pc6h/UGM-Symbol-Icon-2048x1170.webp"
            alt="Njoroge wa Mbaikia Logo"
            className="w-12 h-12 object-contain text-[#89E900]"
          />

          {/* Desktop Menu - Changed fixed w-[500px] to max-w for responsiveness */}
          <ul className="hidden md:flex justify-between w-full max-w-[500px] gap-6">
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

          {/* Mobile Toggle - Swapped text-white to text-black to match desktop menu theme readability */}
          <button
            className="md:hidden text-black transition-transform active:scale-95"
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
                    className="block py-3 px-4 text-black hover:text-cyan-400 transition"
                    onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
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