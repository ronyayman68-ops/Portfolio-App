import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[#050505]"
    >
      {/* Background blobs */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]"
      />

      {/* Main Content */}
      <div className="max-w-7xl w-full z-10 flex flex-col items-center text-center">
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 md:p-20 rounded-[60px] shadow-2xl shadow-black/20 transition-all duration-500"
        >
          <h1 className="text-6xl md:text-8xl text-white mb-6 italic leading-tight font-['Playfair_Display']">
            Raghad Ayman
          </h1>

          <div className="space-y-3">
            <p className="text-xl md:text-2xl font-light tracking-[0.35em] text-pink-200 uppercase">
              UI/UX Designer
            </p>

            <p className="text-lg md:text-xl font-light tracking-[0.25em] text-violet-200 uppercase">
              3D AND VR Designer
            </p>
          </div>
        </motion.div>

        <a
          href={process.env.PUBLIC_URL + "/cv.pdf"}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          View CV
        </a>
      </div>
    </section>
  );
}
