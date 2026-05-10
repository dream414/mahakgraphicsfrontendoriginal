import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleClick = (section) => {
    setActive(section)
    setMenuOpen(false)

    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const linkClass = (name) =>
    `relative cursor-pointer transition duration-300 ${
      active === name
        ? "text-cyan-300"
        : "text-slate-200 hover:text-cyan-300"
    }`

  const underline = (activeState) =>
    `absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
      activeState ? "w-full" : "w-0"
    }`

  return (
    <nav className="relative sticky top-0 z-50">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#082f49] backdrop-blur-xl" />

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* ================= WHITE PARTICLES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.6,
              animation: `float ${3 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center z-20">

        {/* LOGO */}
        <h1 className="text-3xl font-bold tracking-wide cursor-pointer text-white">
          <span className="text-cyan-400">MD 💎</span> Designer
        </h1>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">

          {["home", "about", "services", "portfolio", "templates", "testimonials"].map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              <span className={underline(active === item)} />
            </li>
          ))}

        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="px-6 py-2 rounded-xl text-white font-semibold
            bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600
            shadow-[0_0_25px_rgba(34,211,238,0.4)]
            hover:scale-105 transition duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl z-30"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden relative z-20 text-center px-6 py-6 space-y-5 bg-[#0b1220] text-slate-200">

          {["home", "about", "services", "portfolio", "templates", "testimonials"].map((item) => (
            <p
              key={item}
              onClick={() => handleClick(item)}
              className={`relative cursor-pointer py-2 transition duration-300 ${
                active === item
                  ? "text-cyan-300"
                  : "hover:text-cyan-300"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  active === item
                    ? "w-16 opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </p>
          ))}

          {/* MOBILE BUTTON */}
          <div className="pt-4">
            <a
              href="#contact"
              className="block w-full py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600
              shadow-[0_0_25px_rgba(34,211,238,0.4)]
              hover:scale-105 transition duration-300"
            >
              Hire Me
            </a>
          </div>

        </div>
      )}

      {/* ================= ANIMATION CSS ================= */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.2;
          }

          50% {
            transform: translateY(-15px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
        }
      `}</style>

    </nav>
  )
}

export default Navbar