import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="px-6 py-8 justify-center h-185 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 className="text-2xl font-medium mb-2">
            <span className="text-[#89E900] font-sans text-3xl md:text-5xl">
              NJOROGE
            </span>
            <br />
            <span className="text-[#89E900] font-sans text-3xl md:text-5xl">
              WA MBAIKIA
            </span>
          </h1>

          <p className="font-medium mb-6 text-black leading-relaxed text-sm md:text-base">
            I am committed to building a stronger and better tomorrow by taking
            deliberate action today to create meaningful and lasting change.
            Through dedication, innovation, and responsibility, I strive to
            contribute to solutions that uplift communities and improve lives.
            My goal is to help shape a future that is more inclusive, resilient,
            and full of opportunity for everyone.
          </p>

          <button className="bg-[#222222] text-[#89E900] px-6 py-2.5 rounded-2xl font-medium text-sm hover:scale-105 transition">
            JOIN THE MOVEMENT
          </button>
        </div>

        <div className="relative flex items-center justify-center py-6">
          <div className="relative z-10 flex items-end justify-center py-6">
            <motion.img
              src="https://i.postimg.cc/3xG4CNCF/erasebg-transformed.png"
              alt="product"
              className="w-64 h-64 md:w-170 md:h-170 object-cover relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
