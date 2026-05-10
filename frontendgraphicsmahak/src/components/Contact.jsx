import { useState } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa"
import { motion } from "framer-motion"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  // ================= BACKEND (SAME AS YOUR ORIGINAL) =================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    alert("Message Sent!")

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-10 overflow-hidden"
    >

      {/* ================= HERO BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#082f49]" />

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[180px]" />

      {/* ================= PARTICLES (HERO STYLE) ================= */}
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

      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h2>
        <p className="text-white/70 mt-3">
          Feel free to connect anytime
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* ================= LEFT FORM (BACKEND SAME) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-2xl overflow-hidden"
        >

          {/* glass bg */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl" />

          <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full top-0 left-0" />

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 outline-none"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 outline-none"
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-xl hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 flex flex-col justify-center text-white"
        >

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-2">
              Get In Touch
            </h3>
            <p className="text-white/70">
              I am available for freelance design and development work.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <FaEnvelope />
            <span className="font-bold ml-2">mahakdev201@gmail.com</span>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <FaPhone />
            <span className="font-bold ml-2">+92 312 0016676</span>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <FaMapMarkerAlt />
            <span className="font-bold ml-2">Shikarpur, Sindh, Pakistan</span>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="font-bold mb-4">Follow Me</h3>
            <div className="flex gap-5 text-2xl">
              <FaGithub />
              <FaLinkedin />
              <FaWhatsapp />
            </div>
          </div>

        </motion.div>

      </div>

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

    </section>
  )
}

export default Contact