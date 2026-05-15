import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { type: "user", text: input },
      { type: "bot", text: "Thanks! I’ll get back to you soon 🚀" },
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-6">
        <nav
          className={
            darkMode
              ? "w-full max-w-7xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] shadow-2xl shadow-black/30 px-8 py-4 flex items-center justify-between"
              : "w-full max-w-7xl backdrop-blur-xl bg-white/25 border border-white/40 rounded-[32px] shadow-2xl shadow-pink-200/20 px-8 py-4 flex items-center justify-between"
          }
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#fbc2eb] via-[#d8b4fe] to-[#a6c1ee] flex items-center justify-center font-bold">
              R
            </div>
            <h1
              className={
                darkMode ? "text-white italic" : "text-[#2d2d2d] italic"
              }
            >
              Raghad
            </h1>
          </div>

          {/* LINKS */}
          <ul className="hidden md:flex gap-10">
            {navItems.map((item, i) => (
              <li
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer uppercase text-xs tracking-widest"
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☾" : "☀"}
            </button>

            <button
              onClick={() => setOpenChat(true)}
              className={
                darkMode
                  ? "hidden md:block px-7 py-3 rounded-full bg-white text-black uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-gray-200 transition duration-300 shadow-xl shadow-black/20"
                  : "hidden md:block px-7 py-3 rounded-full bg-[#2d2d2d] text-white uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-[#444] transition duration-300 shadow-xl shadow-black/10"
              }
            >
              Let's Talk
            </button>
          </div>
        </nav>
      </header>

      {/* CHAT MODAL */}
      {openChat && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
          <div
            className={
              darkMode
                ? "w-[340px] h-[450px] bg-[#111] border border-white/10 rounded-2xl flex flex-col"
                : "w-[340px] h-[450px] bg-white border border-black/10 rounded-2xl flex flex-col"
            }
          >
            {/* HEADER */}
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold">Chat with me</h2>
              <button onClick={() => setOpenChat(false)}>✕</button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={
                    msg.type === "user"
                      ? "ml-auto bg-pink-400 text-white px-3 py-2 rounded-[18px] max-w-[80%]"
                      : darkMode
                        ? "bg-white/10 text-white px-3 py-2 rounded-[18px] max-w-[80%]"
                        : "bg-gray-200 text-black px-3 py-2 rounded-[18px] max-w-[80%]"
                  }
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="p-3 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."
                className="flex-1 p-2 rounded-[12px] border outline-none"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-pink-400 text-white rounded-[12px]"
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
