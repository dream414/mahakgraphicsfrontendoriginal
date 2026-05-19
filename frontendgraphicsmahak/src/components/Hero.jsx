import { useState } from "react";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden bg-[#030712]"
    >

      {/* ================= PREMIUM BACKGROUND ================= */}

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

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[180px]" />

      {/* ================= HEAVY PARTICLES ================= */}
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

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <div className="space-y-8">

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-cyan-300/20 text-cyan-200 text-sm backdrop-blur-md shadow-lg">
            Professional Graphic Designer
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            MAHAK DEV
            <span className="block text-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]">
              💎 DESIGNER
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            I am a creative Graphic Designer focused on building clean,
            modern, and impactful visual experiences that elevate brands
            with premium design aesthetics.
          </p>

          <div className="flex flex-wrap gap-5">

            <button
              onClick={() => setShowModal(true)}
              className="group relative overflow-hidden bg-cyan-400 hover:bg-cyan-300 px-8 py-4 rounded-2xl text-black font-semibold transition duration-500 shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10">
                View My Achievements
              </span>

              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition duration-500" />
            </button>

            <a
              href="/graphic.cv.pdf"
              className="border border-cyan-300/30 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl text-white font-semibold backdrop-blur-md transition duration-500 hover:scale-105"
            >
              Download CV
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[120px]" />

          <div className="relative p-[2px] rounded-[40px] bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_50px_rgba(34,211,238,0.25)]">

            <div className="bg-white/5 backdrop-blur-2xl rounded-[38px] p-4 border border-white/10">

              <img
                src="/home.png"
                alt="Designer"
                className="rounded-[30px] w-full max-w-md object-cover transition duration-700 hover:scale-105 cursor-pointer"
              />

            </div>

          </div>

        </div>

      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl">

          <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[150px]" />

          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_60px_rgba(34,211,238,0.4)]">

            <div className="bg-[#07111f]/80 backdrop-blur-2xl rounded-3xl p-4 relative border border-white/10">

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-white text-xl font-bold rounded-full border border-white/20 bg-black/60 px-3 py-2 hover:scale-110 transition"
              >
                ✕
              </button>

              <img
                src="/graphics.jpg"
                className="w-[350px] md:w-[500px] rounded-2xl"
              />

              <h2 className="text-center text-white mt-5 font-bold text-xl">
                My Achievements Preview
              </h2>

            </div>

          </div>
        </div>
      )}

      {/* ================= ANIMATION ================= */}
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

    </section>
  );
}

export default Hero;