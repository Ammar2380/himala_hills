import React from 'react';
import { motion } from 'framer-motion';
import heroBg from "./image 2.png";
import heroimg from './Frame 22.png';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section
      className="relative min-h-[700px] md:min-h-[500px]  scroll-m-50 flex justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home"
    >
      {/* Mobile-only intense gradient for readability; Original desktop overlay kept */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 md:hidden" />
      <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full max-w-7xl px-6 py-12 md:py-0 flex flex-col md:flex-row justify-between items-center md:top-0 top-10"
      >
        {/* Left Content */}
        <div className="max-w-xl z-10 text-center md:text-left">
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-3 py-1 mb-4 text-[10px] tracking-[0.2em] font-bold uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              Hand-Harvested at 18,000 ft
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black leading-tight md:leading-tight text-balance md:w-200"
          >
            Himala Hills <br /> 
            <span className="text-[#FFC936]">Premium Himalayan</span> <br /> 
            Shilajit Resin
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-3 text-2xl md:text-3xl opacity-90 tracking-tighter font-sans"
          >
            Health is Life <span className="italic ml-1">Live It Naturally</span>
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-sm pt-4 opacity-80 max-w-md mx-auto md:mx-0 leading-tight"
          >
            "Sun Dried & Hand Harvested in the Sacred <br className="hidden md:block" /> Heights of Himalayas"
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(255,201,54,0)", "0px 0px 20px rgba(255,201,54,0.4)", "0px 0px 0px rgba(255,201,54,0)"] 
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="cursor-pointer bg-gradient-to-r from-[#FFC936] to-[#997920] text-black px-10 py-3 md:px-7 md:py-2 rounded-full font-extrabold text-sm uppercase tracking-wider shadow-xl"
            >
              Try Gold Shilajit
            </motion.button>
          </motion.div>
        </div>

        {/* Right Image - Enhanced for Mobile, Preserved for Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center md:justify-end w-full md:w-[900px] mt-12 md:mt-0 relative"
        >
          {/* Mobile-only Pulsing Glow */}
          <motion.div 
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFC936] opacity-20 blur-[80px] md:hidden" 
          />
          
          <motion.img
          
            src={heroimg}
            alt="Himalayan Shilajit"
            className="relative w-[100%] md:w-[900px] md:top-36 top-10 md:left-6 h-auto z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;