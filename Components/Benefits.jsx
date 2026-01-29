import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// Asset Imports
import B1 from "./benefits (1).png";
import B2 from "./benefits (2).png";
import B3 from "./benefits (3).png";
import B4 from "./benefits (4).png";
import B5 from "./benefits (5).png";
import B6 from "./benefits (6).png";
import B7 from "./benefits (7).png";
import B8 from "./benefits (8).png";
import product from "./SOURCE 1.png";

// Import your MobileBenefits component here
import MobileBenefits from "./Mobile_benefits"; 

const Benefits = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 25 });

  // Desktop transformations
  const rotate = useTransform(smoothScroll, [0, 1], [-30, 210]);
  const revRotate = useTransform(smoothScroll, [0, 1], [30, -210]);
  const ringScale = useTransform(smoothScroll, [0, 0.5, 1], [0.9, 1.2, 0.9]);
  const bgOpacity = useTransform(smoothScroll, [0, 0.5, 1], [0.3, 1, 0.3]);

  const benefitsData = [
    { img: B4, text: "Instant Energy", angle: 0 },
    { img: B3, text: "Muscle Recovery", angle: 45 },
    { img: B2, text: "Immune Shield", angle: 90 },
    { img: B1, text: "Cognitive Focus", angle: 135 },
    { img: B8, text: "Hormonal Balance", angle: 180 },
    { img: B7, text: "Vital Longevity", angle: 225 },
    { img: B6, text: "Cell Repair", angle: 270 },
    { img: B5, text: "Brain Health", angle: 315 },
  ];

  return (
    <>
      {/* 📱 MOBILE VIEW: Shows only on screens smaller than 1024px */}
      <div className="lg:hidden">
        <MobileBenefits />
      </div>

      {/* 💻 DESKTOP VIEW: Shows only on screens 1024px and larger */}
      <section
        ref={containerRef}
        id="shilajit"
        className="hidden lg:flex bg-[#FFF9EE] py-20 overflow-hidden flex-col items-center relative min-h-screen"      >
        {/* BACKGROUND DECOR */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#1a3d3d]/5 rounded-full blur-[120px]" />
        </motion.div>

        {/* HEADER */}
        <div className="text-center z-20 mb-32 px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-[#c5a059] uppercase tracking-[0.4em] block mb-4">
              Gold Grade Resin
            </span>
            <h2 className="text-8xl font-black text-[#1a3d3d] tracking-tighter leading-[0.8]">
              HOLISTIC <br /> <span className="text-[#c5a059]">TRANSFORMATION</span>
            </h2>
          </motion.div>
        </div>

        {/* MASTER ORBIT SYSTEM */}
        <div className="relative w-full max-w-6xl h-[800px] flex items-center justify-center">
          
          {/* Visual Rings */}
          <motion.div
            style={{ scale: ringScale, rotate }}
            className="absolute w-[600px] h-[600px] border border-[#c5a059]/20 rounded-full"
          />
          <motion.div
            style={{ scale: ringScale, rotate: revRotate }}
            className="absolute w-[580px] h-[580px] border border-dashed border-[#1a3d3d]/10 rounded-full"
          />

          {/* Center Product */}
          <motion.div
            style={{ y: useTransform(smoothScroll, [0, 1], [50, -50]) }}
            className="relative z-30"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#c5a059] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <motion.img
                src={product}
                alt="Shilajit Resin"
                className="w-[400px] z-20 drop-shadow-[0_50px_80px_rgba(0,0,0,0.3)] select-none"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* FLOATING SATELLITES */}
          <motion.div
            style={{ rotate }}
            className="absolute w-[600px] h-[600px] z-40"
          >
            {benefitsData.map((b, i) => {
              const radius = 320; // Fixed radius for Desktop
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
                  <motion.div
                    style={{ rotate: revRotate }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "#1a3d3d",
                        transition: { duration: 0.2 },
                      }}
                      className="w-24 h-24 bg-white shadow-2xl rounded-[2rem] border border-[#c5a059]/20 flex items-center justify-center relative overflow-hidden transition-colors duration-300"
                    >
                      <img
                        src={b.img}
                        alt={b.text}
                        className="w-12 h-12 object-contain z-10 group-hover:invert transition-all duration-300"
                      />
                      <div className="absolute top-[-100%] left-[-100%] w-full h-full bg-white/20 rotate-45 group-hover:top-[100%] group-hover:left-[100%] transition-all duration-700" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1, y: -2 }}
                      className="mt-4 text-center"
                    >
                      <span className="block text-xs font-black uppercase tracking-widest text-[#1a3d3d] bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#1a3d3d]/5 shadow-sm">
                        {b.text}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* FOOTER USP */}
        <div className="mt-20 flex gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">100%</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">Organic</span>
          </div>
          <div className="h-8 w-[1px] bg-[#1a3d3d]/20" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">Lab</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">Tested</span>
          </div>
          <div className="h-8 w-[1px] bg-[#1a3d3d]/20" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">Gold</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">Grade</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;