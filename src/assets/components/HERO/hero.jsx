import { motion } from "motion/react";

export default function Hero() {
  return (
    // Changed static w-500 to max-w-5xl w-full
    <section className="flex max-w-8xl w-full mx-auto bg-[#ffffff] overflow-hidden justify-center">

      {/* Left — Text (Changed fixed w-[600px] to max-w-[600px] w-full) */}
      <div className="flex flex-col justify-center px-8 py-16 max-w-[600px] w-full">

        {/* Constituency tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-5 h-[1.5px] bg-[#0F8643] block" />
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-500">
            Member of Parliament · Juja Constituency
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-2 text-neutral-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Njoroge<br />
          <span className="text-[#0F8643]">wa Mbaikia</span>
        </h1>

        <p className="text-[13px] uppercase tracking-[0.06em] text-neutral-400 mb-8">
          Parliamentary Candidate · 2027
        </p>

        {/* Divider */}
        <div className="w-10 h-[2px] bg-neutral-900 mb-6" />

        {/* Body */}
        <p className="text-sm text-neutral-500 leading-[1.8] max-w-sm mb-10 font-light">
          Deliberate action. Lasting change.<br />
          Building a Juja that works for everyone — through accountability,
          innovation, and community-first leadership.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <button className="bg-neutral-900 text-[#0F8643] px-7 py-3 text-[12px] font-medium tracking-[0.1em] uppercase rounded-sm hover:bg-neutral-800 transition">
            Join the Movement
          </button>
          <span className="text-[15px] font-medium tracking-wide text-neutral-400 border-b border-neutral-300 pb-0.5 cursor-pointer hover:text-neutral-600 transition">
            Our Vision →
          </span>
        </div>

        {/* Stat strip */}
        <div className="flex gap-10 mt-8 pt-6 border-t border-neutral-200">
          {[
            { num: "Juja", label: "Constituency" },
            { num: "2027", label: "Election" },
            { num: "People", label: "First Priority" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-3 items-start">
              <span
                className="text-2xl font-bold text-neutral-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {num}
              </span>
              <span className="text-[11px] uppercase tracking-[0.08em] text-neutral-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Image (Changed fixed w-[390px] to max-w-[390px] w-full) */}
      <div className="relative max-w-[390px] w-full flex items-center justify-center hidden sm:flex">
        <motion.img
          src="https://i.postimg.cc/L5J24415/Untitled-June-02-2026-at-08-34-33.png"
          alt="Njoroge wa Mbaikia"
          className="relative z-10 object-cover object-top"
          style={{ width: 290, height: 500 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>

    </section>
  );
}