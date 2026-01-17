import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imgCenter from "./SOURCE 1.png";

const ShilajitResin = () => {
  const containerRef = React.useRef(null);
  
  // Track scroll for cinematic parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax values for mobile elements
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} className="bg-[#FFF9EE] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- MOBILE & TABLET VIEW (Mind-Blowing Creative) --- */}
        <div className="lg:hidden flex flex-col gap-12 relative">
          
          {/* Section 1: The Origin Hook */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#997920]/10 border border-[#997920]/20 mb-6"
            >
              <span className="text-xs font-black text-[#997920] tracking-widest uppercase">
                100% Pure Altai Resin
              </span>
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-black tracking-tighter text-[#1a3d3d] leading-[0.8] mb-8"
            >
              What <span className="text-[#c5a059]">is it?</span>
            </motion.h3>

            <div className="relative pl-6 py-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c5a059] rounded-full" />
              <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                "A natural superfood exuding from the unspoiled slopes of the Altai Mountains."
              </p>
            </div>
          </div>

          {/* Section 2: The Portal (Image Breakout) */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Animated Portal Background */}
            <motion.div 
              style={{ rotate: bgRotate }}
              className="absolute w-72 h-72 border-2 border-dashed border-[#c5a059]/30 rounded-[40px]"
            />
            <div className="absolute w-64 h-64 bg-[#c5a059]/10 blur-[80px] rounded-full animate-pulse" />
            
            <motion.img
              style={{ scale: imageScale }}
              src={imgCenter}
              alt="Shilajit Resin"
              className="w-64 relative z-20 drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
            />
            
            {/* Floating Background Text */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-black/[0.03] pointer-events-none select-none uppercase italic">
              PURE
            </span>
          </div>

          {/* Section 3: The Composition (Card Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-10 shadow-[0_25px_80px_rgba(26,61,61,0.08)] border border-white relative overflow-hidden"
          >
            {/* Abstract background element */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-2xl" />
            
            <h3 className="text-3xl font-black text-[#1a3d3d] mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-[#c5a059] rounded-full" />
              Rich in Vitamins
            </h3>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Contains a wide spectrum of essential vitamins: <br/>
                <span className="font-black text-[#997920] text-2xl tracking-tight">B1–B12, A, C, E, & D3</span>
              </p>

              <div className="grid grid-cols-2 gap-3">
                {['Iron', 'Zinc', 'Magnesium', 'Potassium'].map((min) => (
                  <div key={min} className="bg-[#FFF9EE] py-2 px-4 rounded-xl border border-[#c5a059]/10 text-xs font-bold text-[#1a3d3d] uppercase tracking-wider">
                    {min}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#c5a059]/20">
                <p className="text-[#1a3d3d] font-bold text-sm uppercase tracking-[0.2em] mb-2 opacity-50">Scientific Breakdown</p>
                <p className="text-gray-600 text-sm italic leading-snug">
                  "Fulvic acid, phospholipids, and over 60 macro and micro elements that support peak vitality."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- DESKTOP VIEW (UNTOUCHED LOGIC) --- */}
        <div className="hidden lg:grid grid-cols-3 gap-12 justify-center items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#997920]/10 border border-[#997920]/20">
              <h2 className="text-sm lg:text-lg font-bold text-[#997920] tracking-widest uppercase">
                100% Pure Shilajit Resin
              </h2>
            </div>
            <h3 className="text-5xl lg:text-6xl font-black text-[#1a3d3d] leading-none relative">
              <span className="relative z-10">What is it?</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-[#c5a059]/20 -z-0"></span>
            </h3>
            <div className="p-1 border-l-4 border-[#c5a059] pl-6">
              <p className="text-gray-700 leading-relaxed text-lg italic">
                Shilajit is a natural resin-like superfood that exudes from the
                unspoiled slopes of the Altai Mountains. 
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Over thousands of years, this powerful <span className="font-bold text-[#1a3d3d]">“mountain pitch”</span> forms through the natural
              decomposition of ancient plant matter.
            </p>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex justify-center items-center h-full min-h-[400px] relative">
            <div className="absolute w-72 h-72 bg-[#c5a059] opacity-10 blur-[100px] rounded-full"></div>
            <img
              src={imgCenter}
              alt="Pure Shilajit Resin Main"
              className="max-w-xs lg:max-w-sm w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_35px_35px_rgba(197,160,89,0.4)] transition-all duration-700"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="h-full flex justify-center items-center flex-col">
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border border-white shadow-xl shadow-[#997920]/5">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1a3d3d] flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c5a059]"></span>
                Rich in Vitamins
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-snug">
                  Shilajit in its original form contains a wide spectrum of
                  essential vitamins such as <span className="text-[#997920] font-bold">B1–B12, A, C, E, and D3</span>.
                </p>
                <p className="text-gray-700 leading-snug">
                  It is also rich in minerals including <span className="font-semibold text-black underline decoration-[#c5a059]">Iron, Potassium,
                  Calcium, Zinc, Magnesium, and Copper.</span>
                </p>
                <div className="py-4 border-y border-[#c5a059]/20 my-4">
                   <p className="text-gray-600 text-sm leading-tight">
                    Additionally, it contains amino acids, fulvic acid,
                    hippuric acid, phospholipids, DCPs, DBPs, and over
                    <span className="font-bold"> 60 macro and micro elements.</span>
                  </p>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  This powerful composition is what makes <span className="text-[#997920]">Mountaindrop Shilajit</span> a natural biostimulant that supports vitality,
                  energy, and overall wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShilajitResin;