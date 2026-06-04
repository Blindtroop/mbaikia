import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "https://i.postimg.cc/QdLjjZNt/IMG-20260602-WA0021-(1).jpg",
    position: "center 10%",
  },
  {
    image: "https://i.postimg.cc/Cx4zRxQc/IMG-20260602-WA0024.jpg",
    position: "center 10%",
  },
  {
    image: "https://i.postimg.cc/MpYvnpFd/IMG-20260602-WA0023.jpg",
    position: "center 10%",
  },
];

export default function Hero2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='hero' className="relative h-180 overflow-hidden scroll-mt-20">

      {/* ── Background Slides (unchanged) ── */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: slide.position }}
          />
        </div>
      ))}

      {/* ── Dark Overlay (unchanged) ── */}
      <div className="absolute inset-0 bg-[#0F8643]/20" />

      {/* ── Gradient Overlay (unchanged) ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* ── Static Content — replaced ── */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-16 max-w-5xl">

            {/* Left — Text */}
            <div className="flex flex-col justify-center max-w-[540px] w-full">

              {/* Constituency tag */}
              <div className="flex items-center gap-3 mb-10">
                <span className="w-5 h-[1.5px] bg-[#0F8643] block" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/90">
                  Member of Parliament · Juja Constituency
                </span>
              </div>

              {/* Name */}
              <h1
                className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-2 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Njoroge<br />
                <span className="text-[#0F8643]">wa Mbaikia</span>
              </h1>

              <p className="text-[13px] uppercase tracking-[0.06em] text-white/40 mb-8">
                Parliamentary Candidate · 2027
              </p>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-white/80 mb-6" />

              {/* Body */}
              <p className="text-sm text-white/90 leading-[1.8] max-w-sm mb-10 font-light">
                Deliberate action. Lasting change.<br />
                Building a Juja that works for everyone — through accountability,
                innovation, and community-first leadership.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-6">
                <button className="bg-[#0F8643] text-white px-7 py-3 text-[12px] font-medium tracking-[0.1em] uppercase rounded-sm hover:bg-[#0a6e35] transition">
                  Join the Movement
                </button>
                <span className="text-[15px] font-medium tracking-wide text-white/90 border-b border-white/20 pb-0.5 cursor-pointer hover:text-white/80 transition">
                  Our Vision →
                </span>
              </div>

              {/* Stat strip */}
              <div className="flex gap-10 mt-8 pt-6 border-t border-white/15">
                {[
                  { num: "Juja", label: "Constituency" },
                  { num: "2027", label: "Election" },
                  { num: "People", label: "First Priority" },
                ].map(({ num, label }) => (
                  <div key={label} className="flex flex-col gap-1 items-start">
                    <span
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {num}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.08em] text-white/40">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Slide Indicators (unchanged) ── */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === index ? "w-10 bg-white" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}