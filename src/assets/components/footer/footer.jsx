import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = ({ onContactOpen }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, href: "#" },
    { name: "Twitter", icon: <FaTwitter />, href: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "#" },
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
  ];

  return (
    <footer className="bg-[#222222] text-white text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo */}
          <div className="space-y-4">
            <img
              src="https://i.postimg.cc/tT4ZxC41/Screenshot-2026-06-02-121742.png"
              alt="Njoroge wa Mbaikia"
              className="w-24 cursor-pointer"
            />
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Parliamentary Candidate · Juja Constituency · 2027
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-400">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-neutral-300">
                <MdEmail className="flex-shrink-0" />
                <a href="mailto:njorogembaikia@gmail.com" className="hover:text-white transition">
                  njorogembaikia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <MdPhone className="flex-shrink-0" />
                <a href="tel:+254115723379" className="hover:text-white transition">
                  +254 115 723379
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-300">
                <MdLocationOn className="flex-shrink-0 mt-0.5" />
                <span>Moi Avenue, Nairobi CBD, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-400">
              Follow the Campaign
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition text-lg"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-400">
              Get Involved
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Ready to be part of the change in Juja?
            </p>
            <button
              onClick={onContactOpen}
              className="border border-[#0F8643] cursor-pointer text-white text-[11px] font-medium tracking-[0.1em] uppercase px-5 py-2.5 rounded-sm hover:bg-[#0F8643] hover:text-neutral-900 transition"
            >
              Join the Movement
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © {currentYear} Made By <a href="https://portfolioo-kaluhi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#0F8643] underline hover:text-white transition">
              Lance Kaluhi.
            </a> All rights reserved.
          </p>
          <p className="text-neutral-700 text-xs">
            Juja Constituency · Kiambu County · Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;