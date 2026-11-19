export default function Footer({ lightMode = true }) {
  return (
    <footer
      className={`py-10 px-6 border-t transition-colors duration-300 ${
        lightMode
          ? "bg-[#0b0d1f] border-white/10"
          : "bg-[#f8f7ff] border-indigo-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p
          className={`text-sm ${
            lightMode ? "text-indigo-200/70" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} Raghad Ayman. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/raghadcody"
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-2 rounded-[18px] bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-400/30 text-pink-200 text-sm font-medium hover:border-pink-400 hover:scale-105 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raghadayman/"
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-2 rounded-[18px] bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-sm font-medium hover:border-cyan-400 hover:scale-105 transition duration-300"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-indigo-300/50 text-xs">
          Built with React • Developed by Rawan Ayman
        </p>
      </div>
    </footer>
  );
}