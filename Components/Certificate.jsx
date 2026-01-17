import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import certImg1 from "./LAB_REPORTS_COMBINED.webp";
import certImg2 from "./CERTIFICATES_COMBINED.webp";

const Certifications = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax for the certificate images
  const y1 = useTransform(scrollYProgress, [0, 0.5], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0.5, 1], [50, -50]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]), { stiffness: 100, damping: 30 });

  return (
    <section ref={targetRef} className="bg-[#FFF9EE] py-16 overflow-hidden" id="Certificates">
      
      {/* --- MOBILE & TABLET VIEW (Legendary Vertical Story) --- */}
      <div className="lg:hidden px-6 space-y-24">
        
        {/* BLOCK 1: STANDARDS */}
        <div className="relative">
          <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }}>
            <h4 className="uppercase tracking-[0.3em] text-[10px] font-black text-[#c5a059] mb-2">
              Himala Hills Standards
            </h4>
            <h2 className="text-4xl font-black text-[#1a3d3d] leading-none mb-6">
              Certified Purity <br/> <span className="text-[#c5a059]">You Can Trust</span>
            </h2>
          </motion.div>

          {/* Interactive Image Card */}
          <motion.div 
            style={{ y: y1, scale }}
            className="relative my-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img src={certImg2} alt="Certifications" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d3d]/40 to-transparent" />
          </motion.div>

          <motion.div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-medium italic border-l-2 border-[#c5a059] pl-4">
              "At Himala Hills, purity is not a promise — it’s a standard."
            </p>
            <div className="grid grid-cols-1 gap-3">
              {["GMP Certified", "ISO 22000", "HACCP Controlled"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-white">
                  <span className="text-[#c5a059] font-bold">✓</span>
                  <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
       
          </motion.div>
        </div>

        {/* BLOCK 2: LAB REPORTS */}
        <div className="relative pt-10 border-t border-[#c5a059]/10">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-black text-[#1a3d3d] mb-4"
          >
            Third-Party <br/> Lab Verification
          </motion.h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            <span className="text-[#1a3d3d] font-bold">Tested. Verified. Transparent.</span> Himala Hills believes real quality speaks through evidence. Every batch is independently tested.
          </p>

          {/* Floating Report Image */}
          <motion.div 
            style={{ y: y2, scale }}
            className="relative my-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-2"
          >
            <img src={certImg1} alt="Lab Reports" className="w-full h-auto" />
          </motion.div>

          <ul className="space-y-4 mb-8">
            {[
              "High Fulvic Acid Levels",
              "Zero Heavy Metals",
              "No Contamination",
              "Composition Analysis"
            ].map((check, i) => (
              <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-800">
                <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                {check}
              </li>
            ))}
          </ul>

          
        </div>
      </div>

      {/* --- DESKTOP VIEW (UNTOUCHED ORIGINAL GRID) --- */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-4  md:px-25 grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-start  p-10 order-1 md:order-none">
          <img src={certImg2} alt="Certifications" className="max-w-2xl   w-full shadow-lg" />
        </div>
        <div className="order-2 md:order-none">
          <h4 className="uppercase tracking-wide text-sm font-semibold text-[#1a3d3d]">Himala Hills Standards</h4>
          <h2 className="text-4xl font-bold mt-2">Certified Purity You Can Trust</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">At Himala Hills, purity is not a promise — it’s a standard. Our Shilajit is processed, tested, and handled under globally recognized quality systems.</p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✅ GMP – Good Manufacturing Practices</li>
            <li>✅ ISO 22000 – Food Safety Management</li>
            <li>✅ HACCP – Risk-Controlled Processing Standards</li>
          </ul>
         
        </div>
        <div className="order-4 md:order-none">
          <h3 className="text-4xl font-bold mt-2">Third-Party Lab Verification</h3>
          <p className="text-gray-700 mt-4 leading-relaxed"><span className="font-semibold text-gray-700 mt-4 leading-relaxed">Tested. Verified. Transparent.</span> Himala Hills believes real quality speaks through evidence.</p>
          <ul className=" mt-6 space-y-2 text-gray-800">
  <li>✅ Naturally High Fulvic Acid Levels</li>
  <li>✅ Zero Heavy Metals</li>
  <li>✅ No Microbial Contamination</li>
  <li>✅ Lab-Tested for Purity & Safety</li>
  <li>✅ 100% Natural & Chemical-Free</li>
</ul>

         
        </div>
        <div className="flex justify-center md:justify-end order-3 p-10 md:order-none">
          <img src={certImg1} alt="Lab Reports" className="max-w-2xl  w-full shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Certifications;