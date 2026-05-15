import { motion } from "framer-motion";
export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className={
          darkMode
            ? "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]"
            : "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[120px]"
        }
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className={
          darkMode
            ? "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]"
            : "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[120px]"
        }
      ></motion.div>

      {/* Main Content */}
      <div className="max-w-7xl w-full z-10 flex flex-col items-center text-center">
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={
            darkMode
              ? "backdrop-blur-xl bg-white/5 border border-white/10 p-12 md:p-20 rounded-[60px] shadow-2xl shadow-black/20 transition-all duration-500"
              : "backdrop-blur-xl bg-white/30 border border-white/40 p-12 md:p-20 rounded-[60px] shadow-2xl shadow-pink-200/30 transition-all duration-500"
          }
        >
          {/* Name */}
          <h1
            className={
              darkMode
                ? "text-6xl md:text-8xl text-white mb-6 italic leading-tight font-['Playfair_Display']"
                : "text-6xl md:text-8xl text-[#2d2d2d] mb-6 italic leading-tight font-['Playfair_Display']"
            }
          >
            Raghad Ayman
          </h1>

          {/* Titles */}
          <div className="space-y-3">
            <p
              className={
                darkMode
                  ? "text-xl md:text-2xl font-light tracking-[0.35em] text-pink-200 uppercase"
                  : "text-xl md:text-2xl font-light tracking-[0.35em] text-[#5a5a5a] uppercase"
              }
            >
              UI/UX Designer
            </p>

            <p
              className={
                darkMode
                  ? "text-lg md:text-xl font-light tracking-[0.25em] text-violet-200 uppercase"
                  : "text-lg md:text-xl font-light tracking-[0.25em] text-[#7a7a7a] uppercase"
              }
            >
              3D AND VR Designer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
