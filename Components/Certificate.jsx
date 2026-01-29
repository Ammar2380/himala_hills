import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-res certificates for the modal
import certImg1 from "./ISO 22000 PNS.jpg.jpeg";
import certImg2 from "./GMP PNS.jpg.jpeg";
import certImg3 from "./HACCP PNS.jpg.jpeg";

// Cover images for the grid display
import coverimg1 from './LAB_REPORTS_COMBINED.webp';
import coverimg2 from './CERTIFICATES_COMBINED.webp';

const Certifications = () => {
  const targetRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const certData = [
    {
      title: "Manufacturing",
      subtitle: "GMP Approved Purity",
      desc: "Good Manufacturing Practices ensure every jar is handled with pharmaceutical-grade care.",
      points: ["Clean Room Facility", "Batch Tracking", "Quality Control"],
      cover: coverimg2,
      fullImg: certImg2,
      btn: "View GMP Details"
    },
    {
      title: "Safety First",
      subtitle: "HACCP Controlled",
      desc: "Risk-based safety controls identify and prevent any potential contamination at every step.",
      points: ["Point Analysis", "Pure Extraction", "Safely Packaged"],
      cover: coverimg1,
      fullImg: certImg3,
      btn: "View Safety Protocol"
    } 
  ];

  return (
    <section ref={targetRef} className="bg-[#FFFBF2] py-16 lg:py-24 overflow-hidden" id="Certificate">
      
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
                className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-black transition-colors"
              >✕</button>
              <img src={selectedImg} alt="Certificate Large View" className="w-full h-auto max-h-[85vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <h4 className="uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs font-black text-[#c5a059] mb-3">Our Certifications</h4>
          <h2 className="text-4xl lg:text-6xl font-black text-[#1a3d3d] tracking-tighter leading-tight italic mb-4">Proof of Trust & Excellence</h2>
          <p className="max-w-2xl text-gray-600 text-sm lg:text-base leading-relaxed">
            We don’t just claim purity. We <strong>prove it</strong> with internationally recognized certifications. 
          </p>
          <div className="h-1 w-16 bg-[#c5a059] mt-6" />
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {certData.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col group"
            >
              {/* IMAGE CONTAINER - Set to aspect-square (4x4) */}
              <div 
                className="relative mb-6 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-square flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedImg(cert.fullImg)}
              >
                <img 
                  src={cert.cover} 
                  alt={cert.subtitle} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#1a3d3d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white text-[#1a3d3d] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Quick View</span>
                </div>
              </div>

              {/* TEXT CONTENT - Reduced spacing (Y gaps) */}
              <div className="text-center md:text-left px-2">
                <h4 className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] mb-1">{cert.title}</h4>
                <h3 className="text-2xl lg:text-3xl font-black text-[#1a3d3d] mb-2 leading-tight italic">{cert.subtitle}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{cert.desc}</p>
                
                <div className="grid grid-cols-1 gap-1.5 mb-5">
                  {cert.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/40 p-1.5 rounded-md border border-white/50">
                      <div className="w-1 h-1 rounded-full bg-[#c5a059]" />
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#1a3d3d]">{p}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedImg(cert.fullImg)}
                  className="w-full py-3.5 border-2 border-[#1a3d3d] text-[#1a3d3d] rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#1a3d3d] hover:text-white transition-all duration-300"
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