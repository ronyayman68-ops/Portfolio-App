import { motion } from "framer-motion";

export default function Hero({ lightMode = true }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/cv1.pdf";
    link.download = "Raghad_Ayman_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 pt-28 pb-16 relative overflow-hidden transition-colors duration-300 ${
        lightMode ? "bg-[#0b0d1f]" : "bg-[#f8f7ff]"
      }`}
    >
      {/* Vibrant Tri-Color Aurora Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="pointer-events-none absolute top-16 left-1/4 w-[320px] h-[320px] md:w-[520px] md:h-[520px] bg-pink-500/30 rounded-full blur-[110px]"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="pointer-events-none absolute bottom-16 right-1/4 w-[320px] h-[320px] md:w-[520px] md:h-[520px] bg-violet-500/30 rounded-full blur-[110px]"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[440px] md:h-[440px] bg-cyan-400/20 rounded-full blur-[120px]"
      />

      {/* Main Content */}
      <div className="max-w-7xl w-full z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className={`backdrop-blur-2xl p-10 md:p-20 rounded-[40px] md:rounded-[60px] transition-all duration-500 ${
            lightMode
              ? "bg-gradient-to-br from-white/[0.08] via-purple-500/[0.05] to-cyan-500/[0.06] border border-white/15 shadow-[0_0_80px_-20px_rgba(168,85,247,0.35)]"
              : "bg-white/80 border border-indigo-200/60 shadow-xl"
          }`}
        >
          {/* Availability Pill */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-6 border ${
              lightMode
                ? "bg-cyan-400/15 border-cyan-300/35 text-cyan-200"
                : "bg-cyan-500/15 border-cyan-600/30 text-cyan-800"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Open to VR, Game Dev & 3D Roles
          </div>

          {/* Gradient Name */}
          <h1 className="text-5xl md:text-8xl mb-6 italic leading-tight font-['Playfair_Display'] bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent pb-2">
            Raghad Ayman
          </h1>

          {/* Colorful Titles */}
          <div className="space-y-2.5 mb-6">
            <p className="text-lg md:text-2xl font-medium tracking-[0.22em] md:tracking-[0.32em] uppercase bg-gradient-to-r from-pink-400 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
              VR & Game Developer
            </p>

            <p className="text-sm md:text-lg font-light tracking-[0.18em] md:tracking-[0.25em] uppercase text-cyan-300">
              3D Environment & Interactive Media Designer
            </p>
          </div>

          {/* Concise Value Proposition */}
          <p
            className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10 ${
              lightMode ? "text-indigo-100/80" : "text-gray-600"
            }`}
          >
            Building real-time virtual reality applications, engaging 3D
            gameplay systems, and spatial visualizations with Unity and Blender.
          </p>

          {/* Vibrant Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToProjects}
              className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)] hover:brightness-110 transition-all duration-300 cursor-pointer"
            >
              Explore Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleDownload}
              className={`px-8 py-3.5 text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer ${
                lightMode
                  ? "text-cyan-200 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-300/30"
                  : "text-indigo-900 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-300"
              }`}
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
