import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_usglzz5";
const TEMPLATE_ID = "template_b7a9kdv";

export default function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;

    const params = {
      from_name:  `${form.firstName.value} ${form.lastName.value}`,
      from_email: form.email.value,
      phone:      form.phone.value || "Not provided",
      subject:    form.subject.value,
      message:    form.message.value,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ background: "rgba(17,17,17,0.55)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-[560px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-black hover:text-neutral-700 transition text-xl leading-none w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Modal */}
            <div className="flex bg-[#f5f4f0]">

              {/* Green left accent bar */}
              <div className="w-[3px] bg-[#0F8643] flex-shrink-0" />

              {/* Content */}
              <div className="flex-1 px-11 py-12">

                {/* Tag */}
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-4 h-[1.5px] bg-[#0F8643] block" />
                  <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-black">
                    Get in Touch
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-[30px] font-bold leading-tight text-black mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Say something.<br />
                  <span className="text-[#0F8643]">We're listening.</span>
                </h2>
                <p className="text-[13px] text-neutral-400 font-light mb-8">
                  A message to Njoroge wa Mbaikia's campaign office.
                </p>

                {/* ✅ Real <form> tag with onSubmit */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["First Name", "firstName", "John"],
                      ["Last Name",  "lastName",  "Kamau"],
                    ].map(([label, name, placeholder]) => (
                      <div key={name} className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-medium tracking-[0.08em] uppercase text-neutral-400">
                          {label}
                        </label>
                        <input
                          type="text"
                          name={name}
                          placeholder={placeholder}
                          required
                          className="bg-white border border-[#e0ddd6] rounded-sm px-3.5 py-2.5 text-[13px] text-neutral-800 font-light outline-none focus:border-[#0F8643] transition"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium tracking-[0.08em] uppercase text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="bg-white border border-[#e0ddd6] rounded-sm px-3.5 py-2.5 text-[13px] text-black font-light outline-none focus:border-[#89E900] transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium tracking-[0.08em] uppercase text-black">
                      Phone <span className="text-neutral-300">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+254 7XX XXX XXX"
                      className="bg-white border border-[#e0ddd6] rounded-sm px-3.5 py-2.5 text-[13px] text-black font-light outline-none focus:border-[#89E900] transition"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium tracking-[0.08em] uppercase text-black">
                      Subject
                    </label>
                    <select
                      name="subject"
                      required
                      className="bg-white border border-[#e0ddd6] rounded-sm px-3.5 py-2.5 text-[13px] text-neutral-800 font-light outline-none focus:border-[#89E900] transition appearance-none"
                    >
                      <option value="" disabled defaultValue="">Select a topic</option>
                      <option>General Inquiry</option>
                      <option>Report an Issue in Juja</option>
                      <option>Volunteer / Join the Movement</option>
                      <option>Missing Child Report</option>
                      <option>Media & Press</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium tracking-[0.08em] uppercase text-black">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us what's on your mind…"
                      required
                      className="bg-white border border-[#e0ddd6] rounded-sm px-3.5 py-2.5 text-[13px] text-neutral-800 font-light outline-none focus:border-[#89E900] transition resize-none"
                    />
                  </div>

                  {/* Status feedback */}
                  {status === "success" && (
                    <p className="text-[12px] text-[#0F8643] font-medium">
                      ✓ Message sent! We'll respond within 48 hours.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-[12px] text-red-500 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-1">
                    {/* ✅ type="submit", no onClick needed */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="bg-neutral-900 text-[#89E900] px-8 py-3 text-[11px] font-medium tracking-[0.1em] uppercase rounded-sm hover:bg-neutral-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </button>
                    <span className="text-[11px] text-neutral-300 font-light">
                      We respond within 48 hours.
                    </span>
                  </div>

                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}