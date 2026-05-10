import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Client One",
      role: "Business Owner",
      text: "Amazing design work and very professional. Highly recommended!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Client Two",
      role: "Startup Founder",
      text: "Very creative and modern design approach. Loved it!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    },
    {
      id: 3,
      name: "Client Three",
      role: "Brand Manager",
      text: "Delivered high quality work on time. Excellent designer!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    }
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 md:px-10 overflow-hidden bg-[#030712]"
    >

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

      {/* ================= PARTICLES (HERO STYLE) ================= */}
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

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-sky-100 mb-12"
        >
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >

              {/* Glass Card */}
              <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 h-full">

                {/* Stars */}
                <div className="flex text-yellow-400 text-lg mb-3">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                {/* Text */}
                <p className="text-sky-100 leading-7 mb-6 italic">
                  "{item.text}"
                </p>

                {/* Client */}
                <div className="flex items-center gap-4">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-cyan-300 shadow-lg"
                  />

                  <div>
                    <h4 className="text-white font-bold">
                      {item.name}
                    </h4>
                    <p className="text-sky-300 text-sm">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* ================= ANIMATION ================= */}
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

export default Testimonials;