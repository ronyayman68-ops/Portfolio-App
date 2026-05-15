import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden flex justify-center"
    >
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-300/20 blur-[140px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-violet-300/20 blur-[140px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-4xl w-full z-10">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-pink-400 mb-3">
            Contact
          </p>

          <h2
            className={
              darkMode
                ? "text-4xl md:text-5xl text-white font-['Playfair_Display']"
                : "text-4xl md:text-5xl text-[#2d2d2d] font-['Playfair_Display']"
            }
          >
            Let’s Work Together
          </h2>

          {/* ✅ UPDATED ANIMATED LINE */}
          <p className={darkMode ? "text-gray-300 mt-4" : "text-gray-600 mt-4"}>
            Got a project or idea? Send me a message{" "}
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block text-pink-400 text-2xl"
            >
              ↓
            </motion.span>
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={
            darkMode
              ? "backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4"
              : "backdrop-blur-xl bg-white/30 border border-white/40 p-8 rounded-3xl space-y-4"
          }
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/10 outline-none text-white placeholder-gray-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/10 outline-none text-white placeholder-gray-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-white/10 outline-none text-white placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-pink-400 text-black font-semibold hover:bg-pink-300 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
