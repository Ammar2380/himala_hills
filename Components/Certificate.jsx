import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certImg1 from "./ISO 22000 PNS.jpg.jpeg";
import certImg2 from "./GMP PNS.jpg.jpeg";
import certImg3 from "./HACCP PNS.jpg.jpeg";

const Certifications = () => {
  const targetRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const certData = [
    {
      title: "Manufacturing",
      subtitle: "GMP Approved Purity",
      desc: "Good Manufacturing Practices ensure every jar is handled with pharmaceutical-grade care.",
      points: ["Clean Room Facility", "Batch Tracking", "Quality Control"],
      img: certImg2,
      btn: "View GMP Details"
    },
    {
      title: "Safety First",
      subtitle: "HACCP Controlled",
      desc: "Risk-based safety controls identify and prevent any potential contamination at every step.",
      points: ["Point Analysis", "Pure Extraction", "Safely Packaged"],
      img: certImg3,
      btn: "View Safety Protocol"
    } 
  ];

  return (
    <section ref={targetRef} className="bg-[#FFFBF2] py-20 lg:py-32 overflow-hidden" id="Certificate">
      
      {/* --- MODAL OVERLAY --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-black"
              >✕</button>
              <img src={selectedImg} alt="Certificate Large View" className="w-full h-auto max-h-[85vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <h4 className="uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs font-black text-[#c5a059] mb-4">Our Certifications</h4>
          <h2 className="text-4xl lg:text-7xl font-black text-[#1a3d3d] tracking-tighter leading-tight italic mb-6">Proof of Trust & Excellence</h2>
          <p className="max-w-2xl text-gray-600 text-sm lg:text-base leading-relaxed">
            We don’t just claim purity. We <strong>prove it</strong> with internationally recognized certifications. 
          </p>
          <div className="h-1 w-20 bg-[#c5a059] mt-8" />
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {certData.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="flex flex-col group"
            >
              {/* Removed style={{ y }} to stop scroll-based movement */}
              <div 
                className="relative mb-10 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/5] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2"
              >
                <img src={cert.img} alt={cert.subtitle} className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-[#c5a059]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="text-center md:text-left px-4">
                <h4 className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] mb-3">{cert.title}</h4>
                <h3 className="text-3xl font-black text-[#1a3d3d] mb-4 leading-tight italic">{cert.subtitle}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{cert.desc}</p>
                
                <div className="grid grid-cols-1 gap-2 mb-8">
                  {cert.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/60 p-2 rounded-lg border border-white/50">
                      <div className="w-1 h-1 rounded-full bg-[#c5a059]" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#1a3d3d]">{p}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedImg(cert.img)}
                  className="w-full py-4 border-2 border-[#1a3d3d] text-[#1a3d3d] rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#1a3d3d] hover:text-white transition-all duration-300 transform group-hover:scale-105"
                >
                  {cert.btn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;