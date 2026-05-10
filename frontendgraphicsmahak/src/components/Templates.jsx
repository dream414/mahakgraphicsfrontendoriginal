import { motion } from "framer-motion";

function Templates() {
  const thumbnails = [
    { name: "Frontend Developer Student Website", img: "/th1.png" },
    { name: "Background  Color Changer App", img: "/th2.png" },
    { name: "Logic Building Of Javascript", img: "/th3.png" },
    { name: "Generate Calculator With JS", img: "/th4.png" },
    { name: "Tailwind Css Website", img: "/th5.png" },
    { name: "Snake, Water & Gun Game", img: "/th6.png" },
  ];

  return (
    <section  id="templates" className="relative py-24 px-6 md:px-10 overflow-hidden
    bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300 rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-[160px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-sky-900 mb-12"
        >
     Latest Thumbnails
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">

          {thumbnails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white/40 backdrop-blur-lg border border-sky-500/50 
              rounded-2xl overflow-hidden shadow-lg shadow-sky-200/30 
              hover:border-sky-700 hover:border-4 hover:scale-105 transition duration-300"
            >

              {/* Image (WIDE + LOW HEIGHT) */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full 
h-70          /* Mobile screen */
sm:h-82       /* Tablet screen */
md:h-52  object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-4 bg-gradient-to-l from-sky-950 via-sky-900 to-sky-800">

                <h3 className="text-white font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-white text-sm mt-1 opacity-90 hover:font-bold">
                  Thumbnail Design
                </p>
<h3 className="text-amber-400 hover:font-bold">By Minahil Hani</h3>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Templates;