import { useState } from "react";

export default function Navbar({ lightMode = true }) {
  const [openChat, setOpenChat] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi 👋 I'm Raghad's portfolio assistant. Ask me about her VR/Unity projects, 3D modeling skills, or availability for roles & collaborations!",
    },
  ]);
  const [input, setInput] = useState("");

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
    setMobileOpen(false);
  };

  const getBotReply = (userText) => {
    const q = userText.toLowerCase();
    if (q.includes("cv") || q.includes("resume")) {
      return "You can download Raghad's latest CV directly from the Hero section at the top of the page 📄.";
    }
    if (q.includes("unity") || q.includes("vr") || q.includes("game")) {
      return "Raghad specializes in Unity VR development, NavMesh AI, and interactive 3D experiences—check out 'VR Kido' and 'VR Super Morning' in the Projects section! 🥽";
    }
    if (q.includes("blender") || q.includes("3d") || q.includes("interior")) {
      return "She has strong expertise in Blender 3D modeling, environment design, lighting, materials, and 3D interior visualization 🎨.";
    }
    if (
      q.includes("hire") ||
      q.includes("work") ||
      q.includes("available") ||
      q.includes("contact")
    ) {
      return "Raghad is open to VR/Game Development, 3D Design roles, and freelance collaborations! Leave a message in the Contact section below or connect on LinkedIn 🤝.";
    }
    return "Thanks for reaching out! Feel free to leave your email in the Contact section below or connect with Raghad on LinkedIn so she can follow up directly 🚀.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const reply = getBotReply(input);

    setMessages([
      ...messages,
      { type: "user", text: input },
      { type: "bot", text: reply },
    ]);

    setInput("");
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-6">
        <nav
          className={`w-full max-w-7xl backdrop-blur-xl rounded-[32px] px-8 py-4 flex items-center justify-between transition-colors duration-300 ${
            lightMode
              ? "bg-white/5 border border-white/10 shadow-2xl shadow-black/30"
              : "bg-white/75 border border-black/10 shadow-xl shadow-black/5"
          }`}
        >
          {/* LOGO */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-300 via-violet-300 to-cyan-200 flex items-center justify-center font-bold text-white shadow-lg">
              R
            </div>

            <h3
              className={`text-2xl tracking-wide italic font-['Playfair_Display'] ${
                lightMode ? "text-white" : "text-[#2d2d2d]"
              }`}
            >
              Raghad Ayman
            </h3>
          </div>

          {/* DESKTOP NAV LINKS */}
          <ul
            className={`hidden md:flex items-center gap-10 ${
              lightMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`relative cursor-pointer uppercase tracking-[0.25em] text-[12px] transition-all duration-300 group ${
                  lightMode ? "hover:text-white" : "hover:text-black"
                }`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-pink-400 to-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setOpenChat(true)}
              className={`hidden md:block px-7 py-3 rounded-full uppercase tracking-[0.2em] text-[11px] font-semibold transition duration-300 shadow-xl cursor-pointer ${
                lightMode
                  ? "bg-white text-black hover:bg-gray-200 shadow-black/20"
                  : "bg-[#2d2d2d] text-white hover:bg-black shadow-black/10"
              }`}
            >
              Quick Q&A
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
              className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            >
              <span
                className={`w-6 h-[1.5px] rounded-full transition-transform duration-300 ${
                  lightMode ? "bg-white" : "bg-[#2d2d2d]"
                } ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`}
              ></span>
              <span
                className={`w-6 h-[1.5px] rounded-full transition-transform duration-300 ${
                  lightMode ? "bg-white" : "bg-[#2d2d2d]"
                } ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
              ></span>
            </button>
          </div>
        </nav>

        {/* MOBILE DROPDOWN MENU */}
        {mobileOpen && (
          <div
            className={`md:hidden absolute top-24 left-4 right-4 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center gap-5 shadow-2xl ${
              lightMode
                ? "bg-[#0d0d0d]/95 border border-white/10 text-gray-300"
                : "bg-white/95 border border-black/10 text-gray-800"
            }`}
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="uppercase tracking-[0.25em] text-xs font-medium hover:text-pink-400 transition cursor-pointer"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => {
                setOpenChat(true);
                setMobileOpen(false);
              }}
              className={`mt-2 px-7 py-3 rounded-full uppercase tracking-[0.2em] text-[11px] font-semibold cursor-pointer ${
                lightMode ? "bg-white text-black" : "bg-[#2d2d2d] text-white"
              }`}
            >
              Quick Q&A
            </button>
          </div>
        )}
      </header>

      {/* CHAT MODAL */}
      {openChat && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] px-4">
          <div className="w-full max-w-[380px] h-[460px] bg-[#111] border border-white/10 rounded-2xl flex flex-col shadow-2xl">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-white text-sm">
                  Portfolio Assistant
                </h2>
                <p className="text-[11px] text-emerald-400">
                  ● Ask about VR, Blender, or availability
                </p>
              </div>

              <button
                onClick={() => setOpenChat(false)}
                aria-label="Close Chat"
                className="text-white hover:text-pink-300 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={
                    msg.type === "user"
                      ? "ml-auto bg-pink-400 text-black font-medium px-4 py-2.5 rounded-[18px] max-w-[82%] text-sm"
                      : "bg-white/10 text-white px-4 py-2.5 rounded-[18px] max-w-[85%] text-sm leading-relaxed"
                  }
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about skills, VR, or CV..."
                className="flex-1 p-2.5 rounded-[12px] bg-black/40 border border-white/10 text-white text-sm outline-none placeholder:text-gray-500"
              />

              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-pink-400 text-black font-semibold text-sm rounded-[12px] hover:bg-pink-300 transition cursor-pointer"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
