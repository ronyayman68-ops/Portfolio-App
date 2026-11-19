import { motion } from "framer-motion";

export default function About({ lightMode = true }) {
  return (
    <section
      id="about"
      className={`relative py-24 px-6 flex justify-center overflow-hidden scroll-mt-20 transition-colors duration-300 ${
        lightMode ? "bg-[#0b0d1f]" : "bg-[#f8f7ff]"
      }`}
    >
      {/* Ambient Color Glows */}
      <div className="pointer-events-none absolute w-[400px] h-[400px] bg-pink-500/15 blur-[130px] rounded-full top-10 left-10"></div>
      <div className="pointer-events-none absolute w-[400px] h-[400px] bg-cyan-400/15 blur-[130px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
        {/* IMAGE WITH GRADIENT RING */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[340px] h-[340px] bg-gradient-to-tr from-pink-500 via-violet-500 to-cyan-400 blur-[80px] rounded-full opacity-45"></div>

          <div className="relative p-[2px] rounded-[42px] bg-gradient-to-tr from-pink-400 via-violet-400 to-cyan-300 shadow-2xl">
            <div className="w-[316px] h-[376px] rounded-[40px] overflow-hidden bg-[#0b0d1f]">
              <img
                src={process.env.PUBLIC_URL + "/VR.png"}
                alt="Raghad Ayman - VR and 3D Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm font-semibold bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            About Me
          </p>

          <h2
            className={`text-4xl md:text-5xl font-['Playfair_Display'] mb-6 leading-tight ${
              lightMode ? "text-white" : "text-[#1e1b4b]"
            }`}
          >
            Bridging spatial design &{" "}
            <span className="bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent italic">
              real-time interactivity
            </span>
          </h2>

          <p
            className={`leading-relaxed mb-4 ${
              lightMode ? "text-indigo-100/85" : "text-gray-700"
            }`}
          >
            I am a Digital Media specialist at Future University in Egypt (FUE),
            focused on designing and engineering immersive Virtual Reality
            applications, interactive 3D games, and architectural
            visualizations.
          </p>

          <p
            className={`leading-relaxed mb-8 ${
              lightMode ? "text-indigo-200/70" : "text-gray-600"
            }`}
          >
            Combining technical execution in{" "}
            <span className="text-pink-400 font-semibold">Unity (C#)</span> with
            3D asset creation, texturing, and lighting in{" "}
            <span className="text-cyan-300 font-semibold">Blender</span>, I
            build user-centered experiences ranging from educational VR tools
            for children to AI-driven 3D gameplay.
          </p>

          {/* COLORFUL STAT CARDS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="backdrop-blur-xl rounded-2xl p-4 text-center bg-gradient-to-br from-pink-500/15 to-purple-500/5 border border-pink-400/30">
              <h3 className="text-2xl font-bold text-pink-300">2+</h3>
              <p className="text-xs uppercase tracking-wider mt-1 text-indigo-200/75">
                Years in XR & 3D
              </p>
            </div>

            <div className="backdrop-blur-xl rounded-2xl p-4 text-center bg-gradient-to-br from-violet-500/15 to-indigo-500/5 border border-violet-400/30">
              <h3 className="text-2xl font-bold text-violet-300">10+</h3>
              <p className="text-xs uppercase tracking-wider mt-1 text-indigo-200/75">
                Shipped Builds
              </p>
            </div>

            <div className="backdrop-blur-xl rounded-2xl p-4 text-center bg-gradient-to-br from-cyan-500/15 to-blue-500/5 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-cyan-300">10+</h3>
              <p className="text-xs uppercase tracking-wider mt-1 text-indigo-200/75">
                Tools & Engines
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
