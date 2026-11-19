import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

export default function Projects({ lightMode = true }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "VR Super Morning",
      role: "VR Developer & 3D Environment Artist",
      accentColor: "text-pink-400",
      borderHover:
        "hover:border-pink-400/50 hover:shadow-[0_10px_40px_-15px_rgba(244,114,182,0.4)]",
      pillStyle: "bg-pink-500/20 text-pink-200 border border-pink-400/30",
      description:
        "Built an interactive VR educational tour for children, combining spatial audio-visual storytelling with intuitive real-time navigation.",
      highlights: [
        "Designed and optimized kid-friendly 3D environments in Blender for smooth VR frame rates.",
        "Implemented spatial audio cues and guided real-time locomotion inside Unity.",
        "Created interactive scene triggers to boost engagement and exploration.",
      ],
      tech: ["Unity", "VR", "Blender", "C#"],
      image: "/Supermor.png",
      repoUrl: "https://github.com/raghadcody",
    },
    {
      title: "3D Endless Runner",
      role: "Game Developer & 3D Artist",
      accentColor: "text-violet-300",
      borderHover:
        "hover:border-violet-400/50 hover:shadow-[0_10px_40px_-15px_rgba(167,139,250,0.4)]",
      pillStyle:
        "bg-violet-500/20 text-violet-200 border border-violet-400/30",
      description:
        "Developed a fast-paced 3D Unity runner game featuring procedural obstacle avoidance and a custom-textured NavMesh AI companion.",
      highlights: [
        "Programmed dynamic obstacle spawning, collision handling, and progressive difficulty scaling.",
        "Built an intelligent companion character driven by Unity NavMesh pathfinding.",
        "Modeled and custom-textured 3D assets and environment props in Blender.",
      ],
      tech: ["Unity", "3D", "NavMesh AI", "Blender"],
      image: "/Game.png",
      repoUrl: "https://github.com/raghadcody",
    },
    {
      title: "VR Kido",
      role: "XR Designer & Unity Developer",
      accentColor: "text-cyan-300",
      borderHover:
        "hover:border-cyan-400/50 hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,0.4)]",
      pillStyle: "bg-cyan-500/20 text-cyan-200 border border-cyan-400/30",
      description:
        "Developed an immersive virtual reality cognitive training game tailored for children with ADHD, featuring interactive 3D puzzles and spot-the-difference challenges.",
      highlights: [
        "Designed focus-enhancing 3D spatial puzzles and visual attention mechanics tailored for neurodiverse learners.",
        "Built tactile VR object grabbing and feedback interactions in Unity.",
        "Crafted colorful, low-distraction 3D environments in Blender.",
      ],
      tech: ["Unity", "VR", "Blender", "UX Design"],
      image: "/VRKido.png",
      repoUrl: "https://github.com/raghadcody",
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-24 px-6 overflow-hidden scroll-mt-20 transition-colors duration-300 ${
        lightMode ? "bg-[#0b0d1f]" : "bg-[#f8f7ff]"
      }`}
    >
      {/* Multi-color Ambient Glow */}
      <div className="pointer-events-none absolute w-[420px] h-[420px] bg-violet-500/15 blur-[150px] rounded-full top-1/4 left-1/4"></div>
      <div className="pointer-events-none absolute w-[420px] h-[420px] bg-pink-500/15 blur-[150px] rounded-full bottom-1/4 right-1/4"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.3em] text-xs font-semibold bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent mb-2">
            Selected Work
          </p>

          <h2
            className={
              lightMode
                ? "text-3xl md:text-5xl text-white font-['Playfair_Display']"
                : "text-3xl md:text-5xl text-[#1e1b4b] font-['Playfair_Display']"
            }
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer rounded-3xl backdrop-blur-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                lightMode
                  ? `bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 ${project.borderHover}`
                  : "bg-white/80 border border-indigo-200 shadow-sm"
              }`}
            >
              <div className="w-full aspect-video overflow-hidden relative bg-black/40">
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-[10px] uppercase tracking-widest text-indigo-300/80 mb-1">
                  {project.role}
                </p>

                <h3
                  className={`text-xl font-bold mb-2 transition ${project.accentColor}`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-4 flex-grow ${
                    lightMode ? "text-indigo-100/80" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${project.pillStyle}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`text-xs font-semibold group-hover:translate-x-1 transition-transform shrink-0 ml-2 ${project.accentColor}`}
                  >
                    Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999] p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#11142b] border border-white/20 rounded-3xl overflow-hidden shadow-2xl text-white"
          >
            <div className="relative aspect-video max-h-64 w-full bg-black">
              <img
                src={process.env.PUBLIC_URL + selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-pink-500 transition flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-1">
                {selectedProject.role}
              </p>
              <h3
                className={`text-2xl md:text-3xl font-['Playfair_Display'] mb-3 ${selectedProject.accentColor}`}
              >
                {selectedProject.title}
              </h3>

              <p className="text-indigo-100/85 text-sm leading-relaxed mb-4">
                {selectedProject.description}
              </p>

              <h4 className="text-xs uppercase tracking-widest text-indigo-300/70 mb-2.5">
                Key Contributions
              </h4>
              <ul className="space-y-1.5 mb-5 text-sm text-indigo-50 list-disc list-inside">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full ${selectedProject.pillStyle}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition"
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}