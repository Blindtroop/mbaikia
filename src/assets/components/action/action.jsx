// sections/BelowHero.jsx

import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// ── 1. THE PROMISE ──────────────────────────────────────────────
function ThePromise() {
  const pillars = [
    {
      number: "01",
      title: "Accountability",
      body: "Every shilling of public funds tracked, published, and answerable to Juja residents — not Nairobi offices.",
    },
    {
      number: "02",
      title: "Opportunity",
      body: "Youth employment programs, TVET expansion, and direct SME funding for Juja's entrepreneurs.",
    },
    {
      number: "03",
      title: "Infrastructure",
      body: "Roads, water, and healthcare that match the pace of Juja's growth. Not promises — timelines.",
    },
  ];

  return (
    <section className="bg-[#f5f4f0] px-8 py-24 max-w-5xl mx-auto">
      <motion.div {...fadeUp} className="flex items-center gap-3 mb-16">
        <span className="w-5 h-[1.5px] bg-[#89E900] block" />
        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-400">
          The Promise
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
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

// ── 2. MANIFESTO SNAPSHOT ───────────────────────────────────────
function Manifesto() {
  const commitments = [
    "Establish a Juja Development Fund — KES 50M annually, resident-audited.",
    "500 youth internships within the first 6 months in office.",
    "Free sanitary products in all public primary schools in Juja.",
  ];

  return (
    <section className="bg-[#111] px-8 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-5 h-[1.5px] bg-[#89E900] block" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-500">
              Manifesto
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Not aspirations.<br />
            <span className="text-[#89E900]">Commitments.</span>
          </h2>
          
            href="#"
            className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-neutral-400 border-b border-neutral-700 pb-0.5 hover:text-white hover:border-neutral-400 transition"
          >
            Read Full Manifesto →
          </a>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col gap-8">
          {commitments.map((c, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#89E900] flex-shrink-0" />
              <p className="text-sm text-neutral-300 leading-relaxed font-light">{c}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── 3. MISSING CHILDREN ─────────────────────────────────────────
function MissingChildren() {
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
            
              href="https://missingchild.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-[12px] font-medium tracking-[0.1em] uppercase px-6 py-3 rounded-sm hover:bg-neutral-700 transition"
            >
              Report a Missing Child →
            </a>
          </div>

          {/* Stark stat */}
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
                <p className="text-[12px] text-neutral-400 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── 4. THE CHANGE ───────────────────────────────────────────────
function TheChange() {
  const items = [
    { before: "Potholes on Thika Road feeders", after: "Tarmacked last-mile roads" },
    { before: "Youth unemployment above 40%", after: "Structured skills & jobs pipeline" },
    { before: "Bursaries for the well-connected", after: "Transparent, merit-based bursaries" },
  ];

  return (
    <section className="bg-[#f5f4f0] px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="flex items-center gap-3 mb-16">
          <span className="w-5 h-[1.5px] bg-[#0F8643] block" />
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
              className="grid grid-cols-2 gap-8 py-8"
            >
              <div className="flex items-start gap-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-300 mt-1 w-12 flex-shrink-0">Now</span>
                <p className="text-sm text-neutral-400 font-light line-through decoration-neutral-300">{before}</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[10px] uppercase tracking-widest text-[#89E900] mt-1 w-12 flex-shrink-0">2027</span>
                <p className="text-sm text-neutral-800 font-medium">{after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5. JOIN ─────────────────────────────────────────────────────
function Join() {
  return (
    <section className="bg-[#0F8643] px-8 py-28">
      <motion.div {...fadeUp} className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <h2
          className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Juja deserves better.<br />
          <span className="text-white">Start here.</span>
        </h2>
        <div className="flex flex-col gap-4 items-start md:items-end flex-shrink-0">
          <button className="bg-neutral-900 text-[#0F8643] px-10 py-4 text-[12px] font-medium tracking-[0.12em] uppercase rounded-sm hover:bg-neutral-800 transition w-full md:w-auto">
            Join the Movement
          </button>
          <button className="bg-transparent border border-neutral-900 text-neutral-900 px-10 py-4 text-[12px] font-medium tracking-[0.12em] uppercase rounded-sm hover:bg-neutral-900 hover:text-[#0F8643] transition w-full md:w-auto">
            Volunteer with Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}

// ── EXPORT ALL ──────────────────────────────────────────────────
export default function BelowHero() {
  return (
    <>
      <ThePromise />
      <Manifesto />
      <MissingChildren />
      <TheChange />
      <Join />
    </>
  );
}