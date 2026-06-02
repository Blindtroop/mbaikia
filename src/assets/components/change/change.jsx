import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Change() {
  const items = [
    { before: "Potholes on Thika Road feeders", after: "Tarmacked last-mile roads" },
    { before: "Youth unemployment above 40%", after: "Structured skills & jobs pipeline" },
    { before: "Bursaries for the well-connected", after: "Transparent, merit-based bursaries" },
  ];

  return (
    <section className="bg-[#f5f4f0] px-4 sm:px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="flex items-center gap-3 mb-16">
          <span className="w-5 h-[1.5px] bg-[#89E900] block" />
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-400">
            The Change
          </span>
        </motion.div>

        <div className="flex flex-col divide-y divide-neutral-200">
          {items.map(({ before, after }, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              // Changed grid-cols-2 to grid-cols-1 on small viewports and md:grid-cols-2 on desktop. Adjusted mobile grid gap spacing.
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8"
            >
              {/* Added a custom minimum shrink boundary to the label container for tight screens */}
              <div className="flex items-start gap-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-300 mt-1 w-12 flex-shrink-0">Now</span>
                <p className="text-[15px] text-neutral-400 font-light line-through decoration-neutral-300">{before}</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[10px] uppercase tracking-widest text-[#89E900] mt-1 w-12 flex-shrink-0">2027</span>
                <p className="text-[15px] text-neutral-800 font-medium">{after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}