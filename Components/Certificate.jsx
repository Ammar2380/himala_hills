import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-res certificates for the modal
import certImg1 from "./ISO 22000 PNS.jpg.jpeg";
import certImg2 from "./GMP PNS.jpg.jpeg";
import certImg3 from "./HACCP PNS.jpg.jpeg";

// Cover images
import coverimg1 from './LAB_REPORTS_COMBINED.webp';
import coverimg2 from './CERTIFICATES_COMBINED.webp';

const Certifications = () => {
  const targetRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState(null);

  // Gallery array for the Manufacturing slider
  const allCerts = [certImg1, certImg2, certImg3];

  const handleNext = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev + 1) % allCerts.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev - 1 + allCerts.length) % allCerts.length);
  };

  return (
    <section ref={targetRef} className="bg-[#FFFBF2] py-16 lg:py-24 overflow-hidden" id="Certificate">
      
      {/* --- MODAL SLIDER --- */}
      <AnimatePresence>
        {galleryIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGalleryIndex(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setGalleryIndex(null)} className="absolute -top-12 right-0 text-white text-2xl font-bold">✕ Close</button>
              
              {/* Navigation Arrows */}
              <button onClick={handlePrev} className="absolute left-[-20px] lg:left-[-60px] bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all">←</button>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <img src={allCerts[galleryIndex]} alt="Certificate" className="w-full h-auto max-h-[80vh] object-contain" />
                <div className="bg-white py-3 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Certificate {galleryIndex + 1} of {allCerts.length}
                </div>
              </div>

              <button onClick={handleNext} className="absolute right-[-20px] lg:right-[-60px] bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all">→</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <h4 className="uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs font-black text-[#c5a059] mb-3">Our Certifications</h4>
          <h2 className="text-4xl lg:text-6xl font-black text-[#1a3d3d] tracking-tighter leading-tight italic mb-4">Proof of Trust & Excellence</h2>
          <div className="h-1 w-16 bg-[#c5a059] mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* CARD 1: MANUFACTURING (With Slider) */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col group">
            <div 
              className="relative mb-6 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-square flex items-center justify-center transition-all duration-500 cursor-pointer"
              onClick={() => setGalleryIndex(0)}
            >
              <img src={coverimg2} alt="Certificates" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1a3d3d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-white text-[#1a3d3d] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">View All Certificates</span>
              </div>
            </div>
            <div className="text-center md:text-left px-2">
              <h4 className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] mb-1">Manufacturing</h4>
              <h3 className="text-2xl lg:text-3xl font-black text-[#1a3d3d] mb-2 leading-tight italic">GMP Approved Purity</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Internationally recognized quality management and food safety standards.</p>
              <button 
                onClick={() => setGalleryIndex(0)}
                className="w-full py-3.5 border-2 border-[#1a3d3d] text-[#1a3d3d] rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#1a3d3d] hover:text-white transition-all duration-300"
              >
                View Certificates Slider
              </button>
            </div>
          </motion.div>

          {/* CARD 2: SAFETY FIRST (Static / No Button) */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col group">
            <div className="relative mb-6 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-square flex items-center justify-center">
              <img src={coverimg1} alt="Lab Reports" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left px-2">
              <h4 className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] mb-1">Safety First</h4>
              <h3 className="text-2xl lg:text-3xl font-black text-[#1a3d3d] mb-2 leading-tight italic">HACCP Controlled</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Risk-based safety controls identify and prevent any potential contamination at every step.</p>
              <div className="grid grid-cols-1 gap-1.5">
                {["Point Analysis", "Pure Extraction", "Safely Packaged"].map((p, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/40 p-1.5 rounded-md border border-white/50">
                    <div className="w-1 h-1 rounded-full bg-[#c5a059]" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#1a3d3d]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;