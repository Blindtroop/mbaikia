import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Manifesto() {
  const commitments = [
    "Establish a Juja Development Fund — KES 50M annually, resident-audited, ensuring transparency and direct community oversight. No more delays from Nairobi approvals, only fast, accountable, and locally driven impact",
    "500 youth internships within the first 6 months in office, creating immediate pathways for skills development, work experience, and meaningful youth employment opportunities in Juja.",
    "Free sanitary products in all public primary schools in Juja, ensuring dignity, equal access to education, and consistent school attendance for all learners.",
  ];

  return (
    <section className="bg-[#111] px-8 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-5 h-[1.5px] bg-[#0F8643] block" />
            <span className="text-lg font-medium tracking-[0.12em] uppercase text-neutral-500">
              Manifesto
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Not aspirations.<br />
            <span className="text-[#0F8643]">Commitments.</span>
          </h2>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-neutral-400 border-b border-neutral-700 pb-0.5 hover:text-white hover:border-neutral-400 transition"
          >
            Read Full Manifesto →
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          {commitments.map((c, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0F8643] flex-shrink-0" />
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {c}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}