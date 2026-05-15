import { useState } from "react";

export default function Navbar() {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi 👋 How can I help you?" },
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
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { type: "user", text: input },
      { type: "bot", text: "Thanks! I’ll get back to you soon 🚀" },
    ]);

    setInput("");
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-6">
        <nav className="w-full max-w-7xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] shadow-2xl shadow-black/30 px-8 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-300 via-violet-300 to-cyan-200 flex items-center justify-center font-bold text-black shadow-lg">
              R
            </div>

            <h1 className="text-2xl tracking-wide text-white italic font-['Playfair_Display']">
              Raghad
            </h1>
          </div>

          {/* NAV LINKS */}
          <ul className="hidden md:flex items-center gap-10 text-gray-300">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="relative cursor-pointer uppercase tracking-[0.25em] text-[12px] hover:text-white transition-all duration-300 group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-pink-300 to-violet-300 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">

            {/* LET'S TALK */}
            <button
              onClick={() => setOpenChat(true)}
              className="hidden md:block px-7 py-3 rounded-full bg-white text-black uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-gray-200 transition duration-300 shadow-xl shadow-black/20"
            >
              Let's Talk
            </button>

            {/* MOBILE MENU */}
            <button className="md:hidden flex flex-col gap-1.5">
              <span className="w-6 h-[1.5px] bg-white rounded-full"></span>
              <span className="w-6 h-[1.5px] bg-white rounded-full"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* CHAT MODAL */}
      {openChat && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">
          <div className="w-[340px] h-[450px] bg-[#111] border border-white/10 rounded-2xl flex flex-col shadow-2xl">

            {/* HEADER */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="font-semibold text-white">
                Chat with me
              </h2>

              <button
                onClick={() => setOpenChat(false)}
                className="text-white hover:text-pink-300 transition"
              >
                ✕
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={
                    msg.type === "user"
                      ? "ml-auto bg-pink-400 text-white px-4 py-2 rounded-[18px] max-w-[80%]"
                      : "bg-white/10 text-white px-4 py-2 rounded-[18px] max-w-[80%]"
                  }
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."
                className="flex-1 p-2 rounded-[12px] bg-black/30 border border-white/10 text-white outline-none placeholder:text-gray-500"
              />

              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-pink-400 text-white rounded-[12px] hover:bg-pink-500 transition"
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