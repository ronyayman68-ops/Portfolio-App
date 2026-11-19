import { motion } from "framer-motion";

export default function Skills({ lightMode = true }) {
  const skills = [
    {
      category: "VR & XR Development",
      items: [
        { name: "Unity XR Interaction Toolkit", level: 85 },
        { name: "Spatial UX & Interaction Design", level: 82 },
        { name: "Real-Time VR Environment Optimization", level: 80 },
      ],
    },
    {
      category: "Game Development",
      items: [
        { name: "2D & 3D Gameplay Programming", level: 85 },
        { name: "NavMesh AI & Obstacle Mechanics", level: 82 },
        { name: "Game Level & Systems Design", level: 80 },
      ],
    },
    {
      category: "3D Modeling & Art",
      items: [
        { name: "Blender 3D Modeling & Topology", level: 90 },
        { name: "3D Environment & World Building", level: 85 },
        { name: "Character Modeling & Texturing", level: 80 },
      ],
    },
    {
      category: "Architectural & Interior Visualization",
      items: [
        { name: "3D Interior Visualization", level: 85 },
        { name: "Spatial Layout & Space Planning", level: 85 },
        { name: "PBR Materials & Scene Lighting", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-300/20 blur-[140px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-violet-300/20 blur-[140px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Title */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-pink-400 mb-3">
            Capabilities
          </p>

          <h2
            className={
              lightMode
                ? "text-4xl md:text-5xl font-['Playfair_Display'] text-white"
                : "text-4xl md:text-5xl font-['Playfair_Display'] text-[#2d2d2d]"
            }
          >
            Technical & Creative Stack
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                lightMode
                  ? "backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-7"
                  : "backdrop-blur-xl bg-white/60 border border-black/10 rounded-3xl p-7 shadow-sm"
              }
            >
              <h3 className="text-pink-400 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
                {group.category}
              </h3>

              <div className="space-y-5">
                {group.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1.5">
                      <span
                        className={
                          lightMode
                            ? "text-white text-sm"
                            : "text-[#2d2d2d] text-sm font-medium"
                        }
                      >
                        {skill.name}
                      </span>

                      <span className="text-pink-400 text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        lightMode ? "bg-white/10" : "bg-black/10"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-pink-400 to-violet-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
