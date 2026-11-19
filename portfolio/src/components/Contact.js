import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

export default function Contact({ lightMode = true }) {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Replace with Raghad's actual email address
  const contactEmail = "raghadayman@example.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Optional: Replace YOUR_FORMSPREE_ID with a free ID from https://formspree.io
      const endpoint = "https://formspree.io/f/YOUR_FORMSPREE_ID";

      if (endpoint.includes("YOUR_FORMSPREE_ID")) {
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        );
        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
        setStatus("Opening your email client to send the message...");
        form.reset();
      } else {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          setStatus("Thank you! Your message has been sent directly.");
          form.reset();
        } else {
          setStatus(
            "Something went wrong. Please email directly or connect on LinkedIn.",
          );
        }
      }
    } catch {
      setStatus("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = lightMode
    ? "w-full p-3.5 rounded-xl bg-white/10 border border-white/15 focus:border-cyan-400 outline-none text-white placeholder-indigo-200/50 transition"
    : "w-full p-3.5 rounded-xl bg-white/85 border border-indigo-200 focus:border-pink-400 outline-none text-[#1e1b4b] placeholder-gray-500 transition";

  return (
    <section
      id="contact"
      className={`relative py-24 px-6 overflow-hidden flex justify-center scroll-mt-20 transition-colors duration-300 ${
        lightMode ? "bg-[#0b0d1f]" : "bg-[#f8f7ff]"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute w-[450px] h-[450px] bg-pink-500/15 blur-[140px] rounded-full top-10 left-10"></div>
      <div className="pointer-events-none absolute w-[450px] h-[450px] bg-cyan-400/15 blur-[140px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-4xl w-full z-10">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.3em] text-xs font-semibold bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent mb-2">
            Get In Touch
          </p>

          <h2
            className={
              lightMode
                ? "text-3xl md:text-5xl text-white font-['Playfair_Display']"
                : "text-3xl md:text-5xl text-[#1e1b4b] font-['Playfair_Display']"
            }
          >
            Let’s Build Something Immersive
          </h2>

          <p
            className={
              lightMode ? "text-indigo-100/75 mt-3" : "text-gray-600 mt-3"
            }
          >
            Interested in collaborating or hiring for a VR, Game Dev, or 3D
            role?{" "}
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block text-cyan-300 text-xl"
            >
              ↓
            </motion.span>
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={
            lightMode
              ? "backdrop-blur-xl bg-white/[0.05] border border-white/15 p-8 md:p-10 rounded-3xl space-y-4"
              : "backdrop-blur-xl bg-white/75 border border-indigo-200 p-8 md:p-10 rounded-3xl space-y-4 shadow-sm"
          }
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className={inputClasses}
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className={inputClasses}
            />
          </div>

          <textarea
            rows="4"
            name="message"
            required
            placeholder="Tell me about your role, project, or collaboration idea..."
            className={inputClasses}
          ></textarea>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white font-bold tracking-wide shadow-[0_0_25px_-5px_rgba(168,85,247,0.5)] hover:brightness-110 disabled:opacity-60 transition cursor-pointer"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm text-cyan-300 pt-2">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
