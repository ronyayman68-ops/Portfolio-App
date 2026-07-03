import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "VR Super Morning",
      description:
        "Built an interactive VR tour environment for children, seamlessly combining audio-visual assets with real-time navigation.",
      tech: ["Unity", "VR", "Blender"],
      image: "/Supermor.png",
    },
    {
      title: "Gaming",
      description:
        "Developed a 3D Unity runner game featuring dynamic obstacle avoidance and a custom-textured NavMesh AI companion.",
      tech: ["Unity", "3D", "Blender"],
      image: "/Game.png",
    },
    {
      title: "VR kido",
      description:
        "Developed an immersive virtual reality game application for adhd children,featuring interactive 3d Puzzles and spot the-diffrence challenges .",
      tech: ["Unity", "Blender", "VR"],
      image: "/VRKido.png",
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
                  ? "rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden flex flex-col"
                  : "rounded-3xl bg-white/30 border border-white/40 backdrop-blur-xl overflow-hidden flex flex-col"
              }
            >
              <div className="w-full h-48 overflow-hidden relative bg-black/10">
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-pink-400">
                  {project.title}
                </h3>

                <p
                  className={
                    darkMode
                      ? "text-gray-300 mb-4 flex-grow"
                      : "text-gray-700 mb-4 flex-grow"
                  }
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-pink-400/20 text-pink-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
