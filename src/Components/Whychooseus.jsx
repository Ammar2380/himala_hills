import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import bgimg from './bg.png';
import img from './Asset 1 1.png';

const points = [
  "100% Himalayan Origin",
  "Pure Resin – No Fillers",
  "Rich in Fulvic Acid",
  "Tested for Purity",
];

const WhyChoose = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the background product image on mobile
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imgOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.15, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[500px] py-20 lg:py-24 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* --- MOBILE & TABLET VIEW (Legendary Kinetic Reveal) --- */}
      <div className="lg:hidden relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black tracking-tighter leading-none">
            Why Choose <br /> 
            <span className="text-[#c5a059]">Himala Hills?</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-4 active:scale-95 transition-transform">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center border border-[#c5a059]/30">
                  <span className="text-[#c5a059] font-bold text-xl">✓</span>
                </div>
                <p className="text-lg font-bold tracking-tight">{p}</p>
                
                {/* Subtle light sweep animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faded Product Watermark for Mobile (Floating in background) */}
        <motion.img
          style={{ y: imgY, opacity: imgOpacity }}
          src={img}
          alt=""
          className="absolute top-0 right-[-20%] w-80 h-auto pointer-events-none -z-10 blur-[2px]"
        />
      </div>

      {/* --- DESKTOP VIEW (UNTOUCHED ORIGINAL) --- */}
      <div className="hidden lg:block relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose Himala Hills?
        </h2>
        <ul className="space-y-4">
          {points.map((p, i) => (
            <li key={i}>✔ {p}</li>
          ))}
        </ul>
      </div>

      {/* Desktop Specific Image (Hidden on Mobile) */}
      <img
        src={img}
        alt=""
        className="absolute hidden lg:block top-1/2 right-0 transform -translate-y-1/2 h-90"
      />
    </section>
  );
};

export default WhyChoose;