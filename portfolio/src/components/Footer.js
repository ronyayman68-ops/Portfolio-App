export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Raghad Ayman
        </p>

        {/* Center - DARK BUTTONS ONLY */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/raghadcody"
            target="_blank"
            rel="noreferrer noopener"
            className="
              px-5 py-2
              rounded-[18px]
              bg-black/30
              border border-white/10
              backdrop-blur-xl
              text-white text-sm
              shadow-lg shadow-black/10
              hover:bg-black/50 hover:scale-105
              transition duration-300
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raghadayman/"
            target="_blank"
            rel="noreferrer noopener"
            className="
              px-5 py-2
              rounded-[18px]
              bg-black/30
              border border-white/10
              backdrop-blur-xl
              text-white text-sm
              shadow-lg shadow-black/10
              hover:bg-black/50 hover:scale-105
              transition duration-300
            "
          >
            LinkedIn
          </a>

        </div>

        {/* Right */}
        <p className="text-gray-500 text-xs">
          Built with React Made by Rawan Ayman
        </p>

      </div>
    </footer>
  );
}