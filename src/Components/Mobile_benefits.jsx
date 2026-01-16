import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import B1 from "./benefits (1).png";
import B2 from "./benefits (2).png";
import B3 from "./benefits (3).png";
import B4 from "./benefits (4).png";
import B5 from "./benefits (5).png";
import B6 from "./benefits (6).png";
import B7 from "./benefits (7).png";
import B8 from "./benefits (8).png";
import product from "./SOURCE 1.png";
import grp1 from './Group 9.png';
import grp2 from './Group 10.png';

const MobileBenefits = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Physics-based spring for "weighted" movement
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Complex transformations for a 3D feeling
  const rotate = useTransform(smoothScroll, [0, 1], [0, 180]); // Orbit rotation
  const revRotate = useTransform(smoothScroll, [0, 1], [0, -180]); // Keeps icons upright
  const ringScale = useTransform(smoothScroll, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const productY = useTransform(smoothScroll, [0, 1], [20, -20]);

  const benefits = [
    { img: B4, text: "Energy", angle: 0 },
    { img: B3, text: "Fatigue", angle: 60 },
    { img: B2, text: "Immunity", angle: 120 },
    { img: B1, text: "Focus", angle: 180 },
    { img: B8, text: "Hormones", angle: 240 },
    { img: B7, text: "Aging", angle: 300 },
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-[#FFF9EE] py-24 overflow-hidden lg:hidden flex flex-col items-center"
    >
      {/* HEADER: Sharp & Editorial */}
      <div className="text-center z-20 mb-20 px-6">
        <motion.span 
          initial={{ opacity: 0, tracking: "0.1em" }}
          whileInView={{ opacity: 1, tracking: "0.3em" }}
          className="text-[10px] font-black text-[#c5a059] uppercase block mb-3 transition-all"
        >
          Bio-Active Potency
        </motion.span>
        <h2 className="text-5xl font-black text-[#1a3d3d] tracking-tighter leading-[0.85]">
          NATURE'S <br/> <span className="text-[#c5a059]">ALCHEMY</span>
        </h2>
      </div>

      {/* THE MASTER ORBIT */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        
        {/* Dynamic Glowing Aura */}
        <motion.div 
          style={{ scale: ringScale }}
          className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#c5a059]/20 to-transparent blur-[80px]"
        />

        {/* Orbit Path (Dashed Ring) */}
        <motion.div 
          style={{ rotate, scale: ringScale }}
          className="absolute w-[300px] h-[300px] border-[1.5px] border-dashed border-[#c5a059]/30 rounded-full"
        />

        {/* Center Product: Floats and Pulses */}
        <motion.div style={{ y: productY }} className="relative z-30">
          <motion.img 
            src={product} 
            alt="Product" 
            className="w-48 z-20 drop-shadow-[0_40px_70px_rgba(0,0,0,0.25)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Floating Icon Satellites */}
        <motion.div style={{ rotate }} className="absolute w-[300px] h-[300px] z-40">
          {benefits.map((b, i) => {
            // Calculate position on the circle
            const radius = 150; 
            const x = Math.cos((b.angle * Math.PI) / 180) * radius;
            const y = Math.sin((b.angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{ 
                  left: `calc(50% + ${x}px)`, 
                  top: `calc(50% + ${y}px)`,
                  x: "-50%",
                  y: "-50%",
                }}
              >
                {/* revRotate keeps the icon and text from turning upside down */}
                <motion.div style={{ rotate: revRotate }} className="flex flex-col items-center">
                  <motion.div 
                    whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                    className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-white flex items-center justify-center group"
                  >
                    <img src={b.img} alt="" className="w-9 h-9 object-contain group-active:scale-90 transition-transform" />
                  </motion.div>
                  
                  <div className="mt-2 bg-[#1a3d3d] px-3 py-1 rounded-full shadow-lg">
                    <span className="text-[8px] font-black uppercase tracking-widest text-white leading-none">
                      {b.text}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* REFINED TRUST BAR */}
      <div className="mt-16 w-[85%]">
        <div className="bg-white/40 backdrop-blur-xl rounded-[32px] p-8 border border-white/60 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] flex flex-col items-center">
          <p className="text-[9px] font-black text-gray-400 tracking-[0.4em] uppercase mb-6">Certified Pure Origin</p>
          <div className="flex justify-between w-full px-4">
            <img src={grp1} alt="" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <div className="w-[1px] h-10 bg-[#c5a059]/20" />
            <img src={grp2} alt="" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBenefits;