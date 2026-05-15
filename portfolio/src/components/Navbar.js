export default function Navbar({ darkMode, setDarkMode }) {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-6">
      <nav
        className={
          darkMode
            ? "w-full max-w-7xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] shadow-2xl shadow-black/30 px-8 py-4 flex items-center justify-between transition-all duration-500"
            : "w-full max-w-7xl backdrop-blur-xl bg-white/25 border border-white/40 rounded-[32px] shadow-2xl shadow-pink-200/20 px-8 py-4 flex items-center justify-between transition-all duration-500"
        }
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#fbc2eb] via-[#d8b4fe] to-[#a6c1ee] flex items-center justify-center font-bold text-[#2d2d2d] shadow-lg transition duration-300 group-hover:scale-110">
            R
          </div>

          <h1
            className={
              darkMode
                ? "text-2xl tracking-wide text-white italic font-['Playfair_Display']"
                : "text-2xl tracking-wide text-[#2d2d2d] italic font-['Playfair_Display']"
            }
          >
            Raghad
          </h1>
        </div>

        {/* NAV LINKS */}
        <ul
          className={
            darkMode
              ? "hidden md:flex items-center gap-10 text-gray-300"
              : "hidden md:flex items-center gap-10 text-[#5a5a5a]"
          }
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={
                darkMode
                  ? "relative cursor-pointer uppercase tracking-[0.25em] text-[12px] hover:text-white transition-all duration-300 group"
                  : "relative cursor-pointer uppercase tracking-[0.25em] text-[12px] hover:text-[#2d2d2d] transition-all duration-300 group"
              }
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-pink-300 to-violet-300 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={
              darkMode
                ? "hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition duration-300"
                : "hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/40 border border-white/60 text-[#5a5a5a] hover:bg-white/70 transition duration-300"
            }
          >
            {darkMode ? "☾" : "☀"}
          </button>

          {/* CTA BUTTON */}
          <button
            onClick={() => scrollToSection("contact")}
            className={
              darkMode
                ? "hidden md:block px-7 py-3 rounded-full bg-white text-black uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-gray-200 transition duration-300 shadow-xl shadow-black/20"
                : "hidden md:block px-7 py-3 rounded-full bg-[#2d2d2d] text-white uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-[#444] transition duration-300 shadow-xl shadow-black/10"
            }
          >
            Let's Talk
          </button>

          {/* MOBILE MENU */}
          <button className="md:hidden flex flex-col gap-1.5">
            <span
              className={
                darkMode
                  ? "w-6 h-[1.5px] bg-white rounded-full"
                  : "w-6 h-[1.5px] bg-[#2d2d2d] rounded-full"
              }
            ></span>
            <span
              className={
                darkMode
                  ? "w-6 h-[1.5px] bg-white rounded-full"
                  : "w-6 h-[1.5px] bg-[#2d2d2d] rounded-full"
              }
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
