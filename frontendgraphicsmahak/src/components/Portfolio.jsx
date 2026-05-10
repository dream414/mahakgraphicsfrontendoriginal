import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

const categories = [
  "All",
  "Logo Design",
  "Brand Design",
  "Social Media",
  "Poster Design",
  "Banner Design",
  "Packaging",
  "Flyers",
  "Mockups",
  "Brochure/Menu",
];

// ✅ DATA (same as yours, already correct)
const portfolioData = [
  // LOGO (9)
  { id: 1, category: "Logo Design", image: "logo1.png", title: "Logo 1", desc: "Modern identity" },
  { id: 2, category: "Logo Design", image: "logo2.png", title: "Logo 2", desc: "Creative concept" },
  { id: 3, category: "Logo Design", image: "logo3.png", title: "Logo 3", desc: "Minimal design" },
  { id: 4, category: "Logo Design", image: "logo4.png", title: "Logo 4", desc: "Brand mark" },
  { id: 5, category: "Logo Design", image: "logo5.png", title: "Logo 5", desc: "Typography logo" },
  { id: 6, category: "Logo Design", image: "logo6.png", title: "Logo 6", desc: "Bold identity" },
  { id: 7, category: "Logo Design", image: "logo7.png", title: "Logo 7", desc: "Startup logo" },
  { id: 8, category: "Logo Design", image: "logo8.png", title: "Logo 8", desc: "Flat design" },
  { id: 9, category: "Logo Design", image: "logo9.png", title: "Logo 9", desc: "Modern brand" },

  // BRAND (6)
  { id: 10, category: "Brand Design", image: "b1.png", title: "Brand 1", desc: "Identity system" },
  { id: 11, category: "Brand Design", image: "b2.png", title: "Brand 2", desc: "Corporate style" },
  { id: 12, category: "Brand Design", image: "b3.png", title: "Brand 3", desc: "Luxury branding" },
  { id: 13, category: "Brand Design", image: "b4.png", title: "Brand 4", desc: "Startup identity" },
  { id: 14, category: "Brand Design", image: "b5.png", title: "Brand 5", desc: "Creative system" },
  { id: 15, category: "Brand Design", image: "b6.png", title: "Brand 6", desc: "Creative system" },

  // SOCIAL (6)
  { id: 16, category: "Social Media", image: "s1.png", title: "Social 1", desc: "Instagram post" },
  { id: 17, category: "Social Media", image: "s2.png", title: "Social 2", desc: "Ad design" },
  { id: 18, category: "Social Media", image: "s3.png", title: "Social 3", desc: "Story post" },
  { id: 19, category: "Social Media", image: "s4.png", title: "Social 4", desc: "Campaign post" },
  { id: 20, category: "Social Media", image: "s5.png", title: "Social 5", desc: "Promo design" },
  { id: 21, category: "Social Media", image: "s6.png", title: "Social 6", desc: "Creative post" },

  // POSTER (6)
  { id: 22, category: "Poster Design", image: "poster1.png", title: "Poster 1", desc: "Event poster" },
  { id: 23, category: "Poster Design", image: "poster2.png", title: "Poster 2", desc: "Marketing poster" },
  { id: 24, category: "Poster Design", image: "poster3.png", title: "Poster 3", desc: "Creative layout" },
  { id: 25, category: "Poster Design", image: "poster4.png", title: "Poster 4", desc: "Business promo" },
  { id: 26, category: "Poster Design", image: "poster5.png", title: "Poster 5", desc: "Modern poster" },
  { id: 27, category: "Poster Design", image: "poster6.png", title: "Poster 6", desc: "Creative poster" },

  // BANNER (6)
  { id: 28, category: "Banner Design", image: "ban1.png", title: "Banner 1", desc: "Web banner" },
  { id: 29, category: "Banner Design", image: "ban2.png", title: "Banner 2", desc: "Ad banner" },
  { id: 30, category: "Banner Design", image: "ban3.png", title: "Banner 3", desc: "Promo banner" },
  { id: 31, category: "Banner Design", image: "ban4.png", title: "Banner 4", desc: "Event banner" },
  { id: 32, category: "Banner Design", image: "ban5.png", title: "Banner 5", desc: "Creative banner" },
  { id: 33, category: "Banner Design", image: "ban6.png", title: "Banner 6", desc: "Modern banner" },

  // PACKAGING (6)
  { id: 34, category: "Packaging", image: "p1.png", title: "Packaging 1", desc: "Product packaging" },
  { id: 35, category: "Packaging", image: "p2.png", title: "Packaging 2", desc: "Modern box design" },
  { id: 36, category: "Packaging", image: "p3.png", title: "Packaging 3", desc: "Luxury packaging" },
  { id: 37, category: "Packaging", image: "p4.png", title: "Packaging 4", desc: "Food packaging" },
  { id: 38, category: "Packaging", image: "p5.png", title: "Packaging 5", desc: "Creative packaging" },
  { id: 39, category: "Packaging", image: "p6.png", title: "Packaging 6", desc: "Custom packaging" },

  // FLYERS (6)
  { id: 40, category: "Flyers", image: "f1.png", title: "Flyer 1", desc: "Event flyer" },
  { id: 41, category: "Flyers", image: "f2.png", title: "Flyer 2", desc: "Business flyer" },
  { id: 42, category: "Flyers", image: "f3.png", title: "Flyer 3", desc: "Promo flyer" },
  { id: 43, category: "Flyers", image: "f4.png", title: "Flyer 4", desc: "Marketing flyer" },
  { id: 44, category: "Flyers", image: "f5.png", title: "Flyer 5", desc: "Creative flyer" },
  { id: 45, category: "Flyers", image: "f6.png", title: "Flyer 6", desc: "Modern flyer" },

  // MOCKUPS (6)
  { id: 46, category: "Mockups", image: "m1.png", title: "Mockup 1", desc: "Brand mockup" },
  { id: 47, category: "Mockups", image: "m2.png", title: "Mockup 2", desc: "Product mockup" },
  { id: 48, category: "Mockups", image: "m3.png", title: "Mockup 3", desc: "Packaging mockup" },
  { id: 49, category: "Mockups", image: "m4.png", title: "Mockup 4", desc: "Logo mockup" },
  { id: 50, category: "Mockups", image: "m5.png", title: "Mockup 5", desc: "3D mockup" },
  { id: 51, category: "Mockups", image: "mockup.png", title: "Mockup 6", desc: "3D mockup" },

  // BROCHURE (6)
  { id: 52, category: "Brochure/Menu", image: "br1.png", title: "Brochure 1", desc: "Corporate brochure" },
  { id: 53, category: "Brochure/Menu", image: "br2.png", title: "Brochure 2", desc: "Menu design" },
  { id: 54, category: "Brochure/Menu", image: "br3.png", title: "Brochure 3", desc: "Tri-fold design" },
  { id: 55, category: "Brochure/Menu", image: "br4.png", title: "Brochure 4", desc: "Business brochure" },
  { id: 56, category: "Brochure/Menu", image: "br5.png", title: "Brochure 5", desc: "Creative menu" },
  { id: 57, category: "Brochure/Menu", image: "br6.png", title: "Brochure 6", desc: "Modern menu" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredRaw =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  let filtered;
  if (activeCategory === "All") {
    filtered = filteredRaw;
  } else if (activeCategory === "Logo Design") {
    filtered = filteredRaw.slice(0, 9);
  } else {
    filtered = filteredRaw.slice(0, 6);
  }

  return (
    <section
      id="portfolio"
      className="relative py-24 px-6 bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 overflow-hidden"
    >

      {/* ================= PREMIUM PARTICLES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(160)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.7,
              transform: `scale(${0.5 + Math.random() * 1.5})`,
              animation: `
                float ${2.5 + Math.random() * 6}s ease-in-out infinite,
                pulse ${2 + Math.random() * 4}s ease-in-out infinite
              `,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-4xl font-bold text-center mb-12 text-sky-100">
          My Portfolio
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg transition ${
                activeCategory === cat ? "bg-sky-500 text-white" : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={`grid sm:grid-cols-2 md:grid-cols-3 ${
            activeCategory === "All" ? "gap-10" : "gap-8"
          }`}
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(56,89,248,0.6)",
                border: "4px solid rgb(251, 191, 36)",
              }}
              className="relative rounded-xl overflow-hidden bg-sky-200"
            >
              <img
                src={item.image}
                loading="lazy"
                className={`w-full ${
                  activeCategory === "All"
                    ? "h-56 object-contain"
                    : "h-44 object-contain"
                }`}
              />

              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <button
                  onClick={() => setSelected(item)}
                  className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition font-extrabold cursor-pointer"
                >
                  <Eye />
                </button>
              </div>

              <div className="p-3 bg-white">
                <h3 className="font-semibold text-sky-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex flex-col justify-center items-center z-50 p-4"
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={selected.image}
                className="max-w-3xl rounded-xl border-4 border-amber-300 shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              />

              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <p className="text-gray-300">{selected.desc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
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
