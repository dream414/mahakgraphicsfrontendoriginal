import { FaPaintBrush, FaImage, FaThLarge, FaShareAlt, FaIdCard } from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Logo Design',
    desc: 'Unique & creative logos for your brand',
    icon: <FaPaintBrush />
  },
  {
    title: 'Poster Design',
    desc: 'Eye-catching posters for any purpose',
    icon: <FaImage />
  },
  {
    title: 'Banner Design',
    desc: 'Web & print banners that stand out',
    icon: <FaThLarge />
  },
  {
    title: 'Social Media Design',
    desc: 'Creative posts for all social platforms',
    icon: <FaShareAlt />
  },
  {
    title: 'Brand Identity',
    desc: 'Complete brand identity solutions',
    icon: <FaIdCard />
  }
]

// alternating animation direction
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: i % 2 === 0 ? 80 : -80,
    scale: 0.8
  }),
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: "easeOut"
    }
  })
}

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#082f49]"
    >

      {/* GLOW BACKGROUND (AUTHENTIC HERO STYLE) */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-400/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-blue-500/20 blur-[160px] rounded-full" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.5,
              animation: `float ${3 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-14">
          Services I Offer
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center shadow-lg hover:shadow-cyan-500/20 transition duration-300 hover:scale-105"
            >

              {/* ICON GLOW */}
              <div className="text-3xl flex justify-center mb-3 text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-125 transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-white mb-2">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {service.desc}
              </p>

              {/* GLOW BORDER EFFECT */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-blue-500/10 blur-xl" />

            </motion.div>
          ))}

        </div>

      </div>

      {/* FLOAT KEYFRAME */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-15px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.2; }
        }
      `}</style>

    </section>
  )
}

export default Services