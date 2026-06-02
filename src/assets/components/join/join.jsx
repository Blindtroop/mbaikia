import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Join() {
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
          <button className="bg-transparent border border-neutral-900 text-neutral-900 px-10 py-4 text-[12px] font-medium tracking-[0.12em] uppercase rounded-sm hover:bg-neutral-900 hover:text-[#89E900] transition w-full md:w-auto">
            Volunteer with Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}