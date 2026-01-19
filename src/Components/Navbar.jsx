import React, { useEffect, useRef, useState } from "react";
import logo from "./Logo.png";
import { Menu, X, ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ cart = [], onCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const marqueeRef = useRef(null);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let x = 0;
    const speed = 0.8;
    const animate = () => {
      x -= speed;
      if (marquee && Math.abs(x) >= marquee.scrollWidth / 3) x = 0;
      if (marquee) marquee.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "product", label: "Product" },
    { id: "shilajit", label: "Shilajit" },
    { id: "wholesale", label: "Wholesale" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className="hidden md:block w-full bg-[#1e1c1b] fixed top-0 z-50 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-3 px-8">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          />
          
          <div className="flex items-center gap-10">
            <ul className="flex list-none text-sm cursor-pointer text-white space-x-8">
              {sections.map((s) => (
                <li key={s.id} onClick={() => handleScroll(s.id)} className="hover:text-yellow-400 transition-colors uppercase font-bold tracking-widest">
                  {s.label}
                </li>
              ))}
            </ul>

            <button onClick={onCartOpen} className="relative text-white hover:text-yellow-400 transition-colors p-2">
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FFC936] text-black text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#1e1c1b]">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE FLOATING HEADER */}
      <div className="md:hidden fixed top-4 left-0 w-full z-[100] px-4">
        <div className="bg-[#1e1c1b]/90 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 flex justify-between items-center shadow-2xl">
          <img src={logo} alt="Logo" className="h-7" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
          
          <div className="flex items-center gap-4">
            <button onClick={onCartOpen} className="relative text-white p-2">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#FFC936] text-black text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-[#FFC936] rounded-full flex items-center justify-center text-black active:scale-90 transition-transform"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN LIQUID OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-screen h-[100dvh] bg-[#1e1c1b] z-[95] md:hidden overflow-y-auto flex flex-col"
          >
            <div className="relative flex flex-col justify-between min-h-full p-8 pt-32 pb-12">
              <div className="w-full">
                <p className="text-[10px] font-black tracking-[0.4em] text-[#FFC936] uppercase mb-8">Navigation</p>
                <nav className="flex flex-col gap-2">
                  {sections.map((section, i) => (
                    <motion.div
                      key={section.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      onClick={() => handleScroll(section.id)}
                      className="group flex items-center justify-between border-b border-white/5 py-5 w-full cursor-pointer"
                    >
                      <div className="flex items-end gap-4">
                        <span className="text-xs font-mono text-[#FFC936]/40 mb-1">0{i + 1}</span>
                        <h2 className="text-4xl font-black text-white group-active:text-[#FFC936] transition-colors tracking-tighter uppercase italic leading-none">
                          {section.label}
                        </h2>
                      </div>
                      <ArrowUpRight className="text-[#FFC936] opacity-40 group-active:opacity-100" size={24} />
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MARQUEE BAR */}
      <div className="w-full bg-[#FFC936] md:block hidden mt-14 md:mt-16 overflow-hidden relative z-[40]">
        <div className="relative w-full overflow-hidden flex items-center h-10">
          <div ref={marqueeRef} className="flex whitespace-nowrap text-black font-black text-[11px] uppercase tracking-tighter">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <React.Fragment key={i}>
                <span className="mx-8">Free Delivery All Over UK</span>
                <span className="mx-8 opacity-40 italic">Himala Hills</span>
                <span className="mx-8 text-[#1e1c1b]">🔥 Limited Stock – Order Now</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;