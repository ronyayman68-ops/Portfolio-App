import { motion } from "framer-motion";

export default function Skills({ darkMode }) {
  const skills = [
    {
      category: "VR Development",
      items: [
        { name: "Unity (VR Experiences)", level: 85 },
        { name: "Immersive Interaction Design", level: 80 },
        { name: "VR Scene Building", level: 80 },
      ],
    },
    {
      category: "Gaming",
      items: [
        { name: "2D Game Development", level: 85 },
        { name: "Game Design Concepts", level: 80 },
        { name: "Interactive Mechanics", level: 80 },
      ],
    },
    {
      category: "3D Design",
      items: [
        { name: "Blender Modeling", level: 90 },
        { name: "3D Environment Design", level: 85 },
        { name: "Character Modeling", level: 80 },
      ],
    },
    {
      category: "Interior Design",
      items: [
        { name: "Space Planning", level: 85 },
        { name: "3D Interior Visualization", level: 85 },
        { name: "Lighting & Materials", level: 80 },
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
            My Skills
          </p>

          <h2
            className={
              darkMode
                ? "text-4xl md:text-5xl font-['Playfair_Display'] text-white"
                : "text-4xl md:text-5xl font-['Playfair_Display'] text-[#2d2d2d]"
            }
          >
            Focused
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                darkMode
                  ? "backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6"
                  : "backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-6"
              }
            >
              {/* Category */}
              <h3 className="text-pink-400 uppercase tracking-[0.2em] text-xs mb-6">
                {group.category}
              </h3>

              {/* Skills */}
              <div className="space-y-5">
                {group.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span
                        className={
                          darkMode
                            ? "text-white text-sm"
                            : "text-[#2d2d2d] text-sm"
                        }
                      >
                        {skill.name}
                      </span>

                      <span className="text-pink-400 text-xs">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
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