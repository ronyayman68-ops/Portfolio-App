import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 flex justify-center overflow-hidden bg-[#050505]"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center z-10">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-pink-300 to-violet-300 blur-[90px] rounded-full opacity-40"></div>

          <div className="relative w-[320px] h-[380px] rounded-[40px] overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
            <img
              src={process.env.PUBLIC_URL + "/VR.png"}
              alt="Raghad Ayman"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-pink-400 mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-6">
            Crafting immersive digital experiences
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I specialize in Digital Media at FUE, blending creativity and
            technology to build immersive VR experiences, gaming environments,
            and 3D visualizations using Unity, Blender, and modern design tools.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mb-8">

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-white text-2xl font-bold">2+</h3>
              <p className="text-sm text-gray-400">Years</p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-white text-2xl font-bold">20+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-white text-2xl font-bold">10+</h3>
              <p className="text-sm text-gray-400">Technologies</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}