import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "My Promise", href: "#" },
    { name: "Manifesto", href: "#" },
    { name: "Donate", href: "#" },
  ];

  // 👉 scroll to donate section
  const scrollToDonate = () => {
  console.log("Donate clicked");
  const el = document.getElementById("donate");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-[90%] max-w-[1000px]">
      <div className="flex items-center justify-between gap-8 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-lg shadow-lg">

        {/* Logo */}
        <img
          src="https://i.postimg.cc/sxw5pc6h/UGM-Symbol-Icon-2048x1170.webp"
          alt="Logo"
          className="w-12 h-12 object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between w-full max-w-[500px] gap-6">
          {links.map((link) => (
            <li key={link.name}>
              {link.name === "Donate" ? (
                <button
                  onClick={scrollToDonate}
                  className="text-white hover:text-[#ffffff] cursor-pointer transition bg-[#0F8643] hover:bg-[#0F8643]/80 py-1 px-3 rounded-full"
                >
                  Donate
                </button>
              ) : (
                <a
                  href={link.href}
                  className="text-white hover:text-[#0F8643] transition"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-3 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col p-4">
            {links.map((link) => (
              <li key={link.name}>
                {link.name === "Donate" ? (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      scrollToDonate();
                    }}
                    className="block w-full text-left py-3 px-4 text-black"
                  >
                    Donate
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="block py-3 px-4 text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}