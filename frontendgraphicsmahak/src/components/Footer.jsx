import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const [active, setActive] = useState(null);

  const handleClick = (name) => {
    setActive(name);
    setTimeout(() => setActive(null), 250);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const itemClass = (name, base = "text-white/80") =>
    `${base} cursor-pointer transition duration-300 transform ${
      active === name ? "scale-110 text-white" : "hover:scale-105"
    }`;

  const headingClass = (name) =>
    `text-cyan-300 font-semibold text-lg mb-4 cursor-pointer transition duration-300 transform ${
      active === name ? "scale-125 text-white" : "hover:scale-110"
    }`;

  return (
    <footer className="relative py-16 px-6 md:px-10 text-white overflow-hidden text-center">

      {/* ================= HERO STYLE BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#082f49]" />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[180px]" />

      {/* ================= PARTICLES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(120)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15 + Math.random() * 0.7,
              transform: `scale(${0.6 + Math.random() * 1.4})`,
              animation: `
                float ${2.5 + Math.random() * 5}s ease-in-out infinite,
                pulse ${2 + Math.random() * 4}s ease-in-out infinite
              `,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 relative z-10">

        {/* BRAND */}
        <div>
          <h2
            onClick={() => handleClick("brand")}
            className={`text-2xl font-bold mb-4 cursor-pointer transition ${
              active === "brand" ? "scale-125 text-white" : "text-sky-100"
            }`}
          >
            MAHAK DEV
            <span className="block text-cyan-300 drop-shadow-lg">
              💎 DESIGNER
            </span>
          </h2>

          <p className={itemClass("brandText")}>
            A unique and creative web designer & developer. Helping brands stand out with modern UI/UX design.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 onClick={() => handleClick("links")} className={headingClass("links")}>
            Links
          </h3>
          <ul className="space-y-2">
            <li onClick={() => handleClick("home")} className={itemClass("home")}>Home</li>
            <li onClick={() => handleClick("about")} className={itemClass("about")}>About</li>
            <li onClick={() => handleClick("services")} className={itemClass("services")}>Services</li>
            <li onClick={() => handleClick("portfolio")} className={itemClass("portfolio")}>Portfolio</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 onClick={() => handleClick("cat")} className={headingClass("cat")}>
            Categories
          </h3>
          <ul className="space-y-2">
            <li className={itemClass("logos")}>Logos</li>
            <li className={itemClass("posters")}>Posters</li>
            <li className={itemClass("banners")}>Banners</li>
            <li className={itemClass("templates")}>Templates</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 onClick={() => handleClick("res")} className={headingClass("res")}>
            Resources
          </h3>
          <ul className="space-y-2">
            <li className={itemClass("blogs")}>Blogs</li>
            <li className={itemClass("faq")}>FAQ</li>
            <li className={itemClass("privacy")}>Privacy Policy</li>
            <li className={itemClass("terms")}>Terms & Conditions</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className={headingClass("social")}>Follow Me</h3>

          <div className="flex gap-4 text-3xl mt-2 justify-center ">
            <a href="https://github.com/dream414/">
              <FaGithub className="cursor-pointer hover:scale-125 transition" />
            </a>

            <a href="https://www.linkedin.com/in/mahak-dev-ba7829386/">
              <FaLinkedin className="cursor-pointer hover:scale-125 transition" />
            </a>

            <a
              href="https://wa.me/923120016676"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-125 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-white/60 mt-12 text-sm relative z-10">
        © 2026 Mahak Dev Designer. All rights reserved.
      </div>

      {/* SCROLL BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-cyan-300 text-sky-950 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp />
      </button>

      {/* ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>

    </footer>
  );
}

export default Footer;