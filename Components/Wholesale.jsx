import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import img from './Frame 20.png';

const Wholesale = () => {
  const containerRef = useRef(null);
  
  // High-performance scroll tracking for the "Tunnel" effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Mobile Animation Transforms
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.5, 1, 1.5]);
  const imageBlur = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);
  const textX = useTransform(smoothProgress, [0, 1], [50, -50]);

  const services = [
    "Bulk Resin Supply",
    "Private Labeling",
    "Label Design & Printing",
    "Premium Glass Jar Kits",
    "Custom Quantity Orders",
    "Worldwide Shipping"
  ];

  return (
    <section ref={containerRef} className="relative bg-[#0e0e0e] lg:bg-[#FFF9EE] min-h-[120vh] lg:min-h-0 overflow-hidden">
      
      {/* --- MOBILE & TABLET VIEW (Cinematic Breakout) --- */}
      <div className="lg:hidden relative h-full flex flex-col items-center justify-center py-20">
        
        {/* BACKGROUND LAYER: The Image as a Dynamic Atmosphere */}
        <motion.div 
          style={{ scale: imageScale, filter: `blur(${imageBlur}px)` }}
          className="absolute inset-0 z-0 opacity-40"
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e]" />
        </motion.div>

        {/* CONTENT LAYER: Floating Typography */}
        <div className="relative z-10 w-full px-6">
          <motion.div 
            style={{ x: textX }}
            className="mb-12"
          >
            <h2 className="text-7xl font-black text-white leading-[0.8] italic uppercase mix-blend-difference">
              B2B <br/> <span className="text-[#c5a059]">SCALE</span>
            </h2>
          </motion.div>

          {/* The "Drifting" List */}
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: false }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-[#c5a059]" />
                <p className="text-xl font-black text-white uppercase tracking-tighter leading-none">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Aggressive CTA */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="mt-20"
          >
            <button className="w-full bg-[#c5a059] text-[#0e0e0e] py-6 rounded-none font-black uppercase tracking-[0.5em] text-xs rotate-[-2deg] shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
              Partner with us
            </button>
          </motion.div>
        </div>
      </div>

      {/* --- DESKTOP VIEW (UNTOUCHED ORIGINAL) --- */}
      <div className="hidden lg:grid max-w-6xl mx-auto px-6 grid-cols-2 gap-10 py-24 items-center">
        <div className="h-94 overflow-hidden">
          <img
            src={img}
            alt="Wholesale Service"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-7xl font-bold leading-tighter mb-4 text-[#1a3d3d]">
            Wholesale & Private Label Services
          </h2>
          <p className="leading-tight text-[#1a3d3d]">
            Bulk Resin Supply Authentic Himalayan Shilajit<br />
            Private Labeling Your brand name, your design<br />
            Label Design & Printing Professional packaging support<br />
            Premium Glass Jar & Spoon Kits Ready to sell<br />
            Custom Quantity Orders Flexible from small to bulk<br />
            Worldwide Shipping Fast, reliable delivery across the <br /> USA and globally
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;