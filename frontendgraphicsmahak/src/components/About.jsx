import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100"
    >

      {/* ================= HERO STYLE PARTICLES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(140)].map((_, i) => (
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

      {/* ================= HERO STYLE GLOWS ================= */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* ================= IMAGE SIDE ================= */}
        <div className="flex justify-center">

          <div className="relative w-[400px] h-[460px]">

            {/* 🔥 ROTATING BACK LAYER (HERO STYLE BG) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#082f49]"
            />

            {/* BACK LAYER PARTICLES */}
            <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
              {[...Array(80)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.2 + Math.random() * 0.6,
                    animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* INNER GAP */}
            <div className="absolute inset-[5px] rounded-[28px] z-10" />

            {/* ================= FRONT ROTATING BORDER ================= */}
          

            {/* IMAGE */}
            <div className="relative z-20 w-full h-full rounded-[28px] overflow-hidden">
              <img
                src="/about.png"
                alt="Graphic Designer"
                className="w-full h-full object-contain transition duration-500 hover:scale-110 cursor-pointer p-6"
              />
            </div>

          </div>

        </div>

        {/* ================= CONTENT SIDE (UNCHANGED) ================= */}
        <div className="space-y-6">

          <div className="inline-block px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-sky-200 text-sky-800 text-sm shadow-sm">
            ✦ Professional Graphicss Designer
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 leading-tight">
            Crafting Visual Experiences <br />
            That <span className="text-sky-600">Inspire & Convert</span>
          </h2>

          <div className="inline-block px-5 py-2 rounded-xl transition-all hover:scale-125 duration-300 cursor-pointer bg-gradient-to-r from-blue-900 via-sky-600 to-cyan-500 text-white font-semibold shadow-md">
            I'm MAHAK DEV 💎 DESIGNER
          </div>

          <div className="space-y-3 text-sky-700 leading-8 text-lg">
            <p>
             When I started coding 💻, I had very little interest in designing 🎨. But as I explored web development 🌐, I realized that creative and visually appealing designs make projects more impactful and engaging ✨. Gradually, my interest turned into passion 🔥. I worked on posters, UI designs, and creative projects 🖌️, and when people appreciated my work, it boosted my confidence even more 💪. Today, designing is not just a skill for me — it is a way to express creativity 🌟, where I focus on uniqueness, balance, and user experience in every project.

Whenever I work on designing 🎨, I feel like I am following in the footsteps of the person who has always been my ideal and who has inspired me 🌿. When I see myself today, I feel really proud that I have developed a strong passion and interest in designing ❤️.
            </p>
          </div>

          {/* SKILLS */}
          <div className="space-y-5 pt-4">
            {[
              { name: "Adobe Photoshop", value: 95 },
              { name: "Adobe Illustrator", value: 90 },
              { name: "InDesign", value: 85 },
              { name: "Canva", value: 99 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-semibold text-sky-800 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-900 via-sky-600 to-cyan-500"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= ANIMATION CSS ================= */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>

    </section>
  );
}

export default About;