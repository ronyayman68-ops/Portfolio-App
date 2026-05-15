import { motion } from "framer-motion";

export default function Skills({ darkMode }) {
  const skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "HTML / CSS", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },

    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express", level: 75, category: "Backend" },
    { name: "APIs", level: 80, category: "Backend" },

    { name: "Figma", level: 95, category: "Design" },
    { name: "Adobe Suite", level: 85, category: "Design" },
    { name: "Blender", level: 80, category: "Design" },

    { name: "Git / GitHub", level: 90, category: "Tools" },
    { name: "Flutter", level: 70, category: "Tools" },
    { name: "Unity / VR", level: 85, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Design", "Tools"];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-pink-300/20 blur-[140px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-violet-300/20 blur-[140px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
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
            Technologies I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
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
              <h3 className="text-pink-400 uppercase tracking-[0.2em] text-xs mb-6">
                {cat}
              </h3>

              <div className="space-y-5">
                {skills
                  .filter((skill) => skill.category === cat)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className={darkMode ? "text-white text-sm" : "text-[#2d2d2d] text-sm"}>
                          {skill.name}
                        </span>
                        <span className="text-pink-400 text-xs">
                          {skill.level}%
                        </span>
                      </div>

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