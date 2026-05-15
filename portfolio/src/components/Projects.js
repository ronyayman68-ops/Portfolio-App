import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "VR Super Morning",
      description: "Immersive VR experience built with Unity.",
      tech: ["Unity", "VR", "Blender"],
    },
    {
      title: "Portfolio Website",
      description: "Modern animated React portfolio.",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "3D Environment",
      description: "Interactive 3D world design.",
      tech: ["Blender", "Twinmotion"],
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-pink-400 mb-3">
            My Work
          </p>

          <h2
            className={
              darkMode
                ? "text-4xl md:text-5xl text-white font-['Playfair_Display']"
                : "text-4xl md:text-5xl text-[#2d2d2d] font-['Playfair_Display']"
            }
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.1 }}
              className={
                darkMode
                  ? "p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                  : "p-6 rounded-3xl bg-white/30 border border-white/40 backdrop-blur-xl"
              }
            >
              <h3 className="text-xl font-bold mb-2 text-pink-400">
                {project.title}
              </h3>

              <p
                className={
                  darkMode ? "text-gray-300 mb-4" : "text-gray-700 mb-4"
                }
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-pink-400/20 text-pink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}