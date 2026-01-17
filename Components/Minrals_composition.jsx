import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img4 from './imgs (1).png'
import img3 from './imgs (2).png'
import img2 from './imgs (3).png'
import img1 from './imgs (4).png'

const Minerals = () => {
  const containerRef = React.useRef(null);
  
  // Mobile Scroll logic
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  const benefits = [
    { img: img1, title: "Physical", sub: "Strength" },
    { img: img2, title: "Heart &", sub: "Mental Health" },
    { img: img3, title: "Male", sub: "Fertility" },
    { img: img4, title: "Skin Glow", sub: "& Anti-Aging" },
  ];

  return (
    <section className="bg-[#1e1c1b] text-white py-12 lg:py-4 overflow-hidden">
      
      {/* --- MOBILE & TABLET VIEW (Mind-Blowing Kinetic Slider) --- */}
      <div className="lg:hidden flex flex-col items-center">
        {/* Title Section */}
        <div className="px-6 text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl font-black leading-none uppercase mb-4"
          >
            Mineral <br /> <span className="text-[#c5a059]">Composition</span>
          </motion.h2>
          <p className="text-xs opacity-70 leading-relaxed max-w-[280px] mx-auto uppercase tracking-widest font-bold">
            84+ essential minerals including Fulvic Acid for absorption.
          </p>
        </div>

        {/* The Scroller */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full gap-6 px-10 pb-12"
        >
          {benefits.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="snap-center flex-shrink-0 w-[80vw] relative group"
            >
              {/* Image Container with Glow */}
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[#c5a059]/5 blur-[60px] pointer-events-none" />
                <img 
                  src={item.img} 
                  className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-active:scale-105 transition-transform duration-500" 
                  alt={item.title} 
                />
                
                {/* Floating Bottom Label Panel */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[28px]">
                  <h4 className="text-2xl font-black leading-none uppercase tracking-tighter">
                    {item.title} <br/> <span className="text-[#c5a059]">{item.sub}</span>
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Progress Dots */}
        <div className="flex gap-2">
          {benefits.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
          ))}
        </div>
      </div>

      {/* --- DESKTOP VIEW (UNTOUCHED LOGIC) --- */}
      <div className="hidden lg:block max-w-5xl mx-auto py-19 px-6 text-center flex flex-col items-center justify-center  space-y-1">
        <h2 className="text-7xl font-bold leading-tighter uppercase">
          Mineral Composition <br /> of Shilajit
        </h2>
<div className="w-243 text-center flex justify-center items-center">

        <p className="opacity-90 max-w-3xl  font-medium leading-tight">
          Himala Hills Shilajit contains over 84+ essential minerals,
          including: Magnesium • Zinc • Iron • Potassium • Calcium •
          Manganese • Copper • Selenium and the key component Fulvic Acid,
          which enhances nutrient absorption.
        </p>
</div>

        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <div className="flex flex-col items-center gap-3">
            <img src={img1} className="h-64 object-contain" alt="" />
            <p className="text-medium font-medium text-center">Physical Strength</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={img2} className="h-64 object-contain" alt="" />
            <p className="text-medium font-medium text-center">Heart & Mental Health</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={img3} className="h-64 object-contain" alt="" />
            <p className="text-medium font-medium text-center">Male Fertility</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={img4} className="h-64 object-contain" alt="" />
            <p className="text-sm font-medium text-center">Skin Glow & Anti-Aging</p>
          </div>
        </div>
      </div>

      {/* Custom Global CSS to hide scrollbars */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Minerals;