import { useState } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      className="relative py-24 px-6 md:px-10 overflow-x-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#082f49]" />

      {/* GLOWS (FIXED) */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[180px] pointer-events-none" />

      {/* PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(140)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
              animation: `float 5s infinite`
            }}
          />
        ))}
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative p-8 rounded-2xl overflow-hidden"
        >

          {/* IMPORTANT FIX (pointer-events-none) */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20"
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20"
            />

            {/* BUTTON (FIXED SAFE) */}
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-xl hover:scale-105 transition relative z-10"
            >
              Send Message
            </button>

          </form>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6 text-white"
        >

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <FaEnvelope /> <span className="ml-2">email@example.com</span>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <FaPhone /> <span className="ml-2">+92 312 0016676</span>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <FaMapMarkerAlt /> <span className="ml-2">Pakistan</span>
          </div>

          <div className="flex gap-5 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaWhatsapp />
          </div>

        </motion.div>

      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  )
}

export default Contact