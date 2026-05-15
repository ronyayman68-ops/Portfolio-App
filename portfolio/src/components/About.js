import { motion } from "framer-motion";

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className="relative py-32 px-6 flex justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-pink-300 to-violet-300 blur-[90px] rounded-full opacity-40"></div>

          <div
            className={
              darkMode
                ? "relative w-[320px] h-[380px] rounded-[40px] overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
                : "relative w-[320px] h-[380px] rounded-[40px] overflow-hidden backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl"
            }
          >
            <img
              src={process.env.PUBLIC_URL + "/VR.png"}
              alt="Raghad Ayman"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-pink-400 mb-4">
            About Me
          </p>

          <h2
            className={
              darkMode
                ? "text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-6"
                : "text-4xl md:text-5xl font-['Playfair_Display'] text-[#2d2d2d] mb-6"
            }
          >
            Crafting digital experiences with elegance & precision
          </h2>

          <p
            className={
              darkMode
                ? "text-gray-300 leading-relaxed mb-6"
                : "text-[#5a5a5a] leading-relaxed mb-6"
            }
          >
            I specialize in Digital Media at FUE, blending code and creativity
            to craft immersive, user-centered experiences. My expertise includes
            UI/UX design, 3D/VR development, and spatial computing using modern
            technologies. I am a DEPI 3D Design & VR graduate and award-winning
            developer (2nd place Cairo ICT 2025, 3rd Super Morning VR). I build
            interactive experiences using Unity, Twinmotion, Blender, Figma, and
            Adobe Creative Suite.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 text-center">
              <h3
                className={
                  darkMode
                    ? "text-white text-2xl font-bold"
                    : "text-[#2d2d2d] text-2xl font-bold"
                }
              >
                2+
              </h3>
              <p className="text-sm text-gray-400">Years</p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 text-center">
              <h3
                className={
                  darkMode
                    ? "text-white text-2xl font-bold"
                    : "text-[#2d2d2d] text-2xl font-bold"
                }
              >
                20+
              </h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 text-center">
              <h3
                className={
                  darkMode
                    ? "text-white text-2xl font-bold"
                    : "text-[#2d2d2d] text-2xl font-bold"
                }
              >
                10+
              </h3>
              <p className="text-sm text-gray-400">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
