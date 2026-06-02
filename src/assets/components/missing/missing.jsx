import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function MissingChildren() {
  return (
    <section className="bg-white px-8 py-24">
      <div className="max-w-5xl mx-auto">

        <motion.div {...fadeUp} className="flex items-center gap-3 mb-16">
          <span className="w-5 h-[1.5px] bg-red-500 block" />
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-400">
            Missing · Kenya
          </span>
        </motion.div>

        <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2
              className="text-4xl font-bold text-neutral-900 leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every child<br />deserves to<br />
              <span className="text-red-500">come home.</span>
            </h2>

            <p className="text-sm text-neutral-500 leading-relaxed font-light max-w-xs mb-8">
              Hundreds of Kenyan children go missing every year. Many cases go unreported,
              uninvestigated, and forgotten. As your MP, I will push for a dedicated
              missing persons unit and a national child-tracking registry.
            </p>

            <a
              href="https://missingchild.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-[12px] font-medium tracking-[0.1em] uppercase px-6 py-3 rounded-sm hover:bg-neutral-700 transition"
            >
              Report a Missing Child →
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8 pt-2">
            {[
              { stat: "4,000+", label: "Children reported missing in Kenya annually" },
              { stat: "60%", label: "Of cases never formally investigated" },
              { stat: "0", label: "Dedicated missing children units in Kiambu County" },
            ].map(({ stat, label }) => (
              <div key={stat} className="border-t border-neutral-100 pt-6">
                <p
                  className="text-4xl font-bold text-neutral-900 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat}
                </p>
                <p className="text-[12px] text-neutral-400 uppercase tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}