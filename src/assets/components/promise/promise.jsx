import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// ── 1. THE PROMISE ──────────────────────────────────────────────
export default function ThePromise() {
  const pillars = [
    {
      number: "01",
      title: "Accountability",
      body: "Every shilling of public funds should be transparently tracked, published, and made fully accountable to the residents of Juja. Oversight must be open and accessible, ensuring that decisions and spending are visible at the local level—not hidden in distant Nairobi offices. This means regular public reporting, community audits, and a commitment to rooting out corruption at every level of government. Accountability isn’t just a promise — it’s a fundamental right for the people of Juja, and I will fight to ensure it is upheld in every aspect of governance.",
    },
    {
      number: "02",
      title: "Opportunity",
      body: "Youth employment programs should be expanded and made more accessible, ensuring young people in Juja gain practical skills and real pathways into meaningful work. This must be supported by stronger TVET expansion, aligned with industry needs to produce job-ready graduates.At the same time, direct funding and support for SMEs should be prioritized to empower local entrepreneurs, stimulate innovation, and strengthen Juja’s local economy through sustainable, community-driven growth",
    },
    {
      number: "03",
      title: "Infrastructure",
      body: "Critical infrastructure projects must be prioritized to improve connectivity, access to services, and overall quality of life for Juja residents. This includes upgrading roads and transportation networks to better connect communities, investing in reliable water and sanitation systems, and expanding access to affordable housing. Infrastructure development should be guided by the needs of the community, with a focus on sustainability and long-term impact. By building a stronger foundation, we can create a Juja that works for everyone — where residents have the resources and opportunities they need to thrive.",
    },
  ];

  return (
    // Changed static w-400 to standard fluid responsive wrapper, updated global padding to handle small viewports nicely
    <section id='promise'className="px-4 sm:px-6 py-24 max-w-5xl w-full mx-auto bg-[#f5f4f0] rounded-lg scroll-smooth">
      <motion.div {...fadeUp} className="flex items-center gap-3 mb-16">
        <span className="w-5 h-[1.5px] bg-[#89E900] block" />
        <span className="text-lg font-medium tracking-[0.12em] uppercase text-neutral-400">
          My Promise
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 ">
        {pillars.map((p, i) => (
          <motion.div
            key={p.number}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="bg-[#f5f4f0] p-10 flex flex-col gap-6"
          >
            <span className="text-[11px] tracking-[0.14em] text-neutral-300 font-medium">
              {p.number}
            </span>
            <h3
              className="text-2xl font-bold text-neutral-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {p.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}