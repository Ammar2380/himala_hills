import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import img from './Frame 20.png';

const Wholesale = () => {
  const containerRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
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

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `Hello! I'm interested in Wholesale/B2B.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}`;
    window.open(`https://wa.me/+923333058456?text=${message}`, "_blank"); 
    setIsFormOpen(false);
  };

  return (
    <section ref={containerRef} className="relative bg-[#0e0e0e] lg:bg-[#FFF9EE] min-h-[120vh] lg:min-h-0 overflow-hidden" id="wholesale">
      
      {/* --- WHATSAPP POPUP FORM --- */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1a1a1a] border border-[#c5a059]/30 p-8 w-full max-w-md relative"
            >
              <button onClick={() => setIsFormOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-[#c5a059]">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-black text-white italic uppercase mb-6 tracking-tighter">Wholesale Inquiry</h3>
              <form onSubmit={handleWhatsApp} className="space-y-4">
                <input required type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 p-4 text-white text-xs font-bold tracking-widest focus:border-[#c5a059] outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border border-white/10 p-4 text-white text-xs font-bold tracking-widest focus:border-[#c5a059] outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required type="tel" placeholder="PHONE NUMBER" className="w-full bg-white/5 border border-white/10 p-4 text-white text-xs font-bold tracking-widest focus:border-[#c5a059] outline-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <button type="submit" className="w-full bg-[#c5a059] text-black font-black py-4 uppercase tracking-widest text-[10px] hover:bg-white transition-colors">Send to WhatsApp</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE & TABLET VIEW --- */}
      <div className="lg:hidden relative h-full flex flex-col items-center justify-center py-20">
        <motion.div style={{ scale: imageScale, filter: `blur(${imageBlur}px)` }} className="absolute inset-0 z-0 opacity-40">
          <img src={img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e]" />
        </motion.div>

        <div className="relative z-10 w-full px-6">
          <motion.div style={{ x: textX }} className="mb-12">
            <h2 className="text-7xl font-black text-white leading-[0.8] italic uppercase mix-blend-difference">
              B2B <br/> <span className="text-[#c5a059]">SCALE</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: false }} className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#c5a059]" />
                <p className="text-xl font-black text-white uppercase tracking-tighter leading-none">{service}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="mt-20">
            <button onClick={() => setIsFormOpen(true)} className="w-full bg-[#c5a059] text-[#0e0e0e] py-6 rounded-none font-black uppercase tracking-[0.5em] text-xs rotate-[-2deg] shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] active:scale-95 transition-transform">
              Partner with us
            </button>
          </motion.div>
        </div>
      </div>

      {/* --- DESKTOP VIEW (EXACT ORIGINAL UI) --- */}
      <div className="hidden lg:grid max-w-6xl mx-auto px-6 grid-cols-2 gap-10 py-24 items-center">
        <div className="h-94 overflow-hidden">
          <img
            src={img}
            alt="Wholesale Service"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="leading-tight">
          <h2 className="text-6xl font-bold leading-tighter mb-4 text-[#1a3d3d]">
            Wholesale & Private Label Services
          </h2>
          <p className="leading-tight text-[#1a3d3d] mb-6">
            Bulk Resin Supply Authentic Himalayan Shilajit<br />
            Private Labeling Your brand name, your design<br />
            Label Design & Printing Professional packaging support<br />
            Premium Glass Jar & Spoon Kits Ready to sell<br />
            Custom Quantity Orders Flexible from small to bulk<br />
            Worldwide Shipping Fast
          </p>
          {/* Button added here to trigger the form on desktop */}
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-[#1a3d3d] text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-[#c5a059] transition-colors"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;