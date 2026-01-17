import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from './Asset 1 2.png';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ShieldCheck, Truck, RotateCcw, ChevronDown, Send } from 'lucide-react';
import Discover from './Discover.png';
import Diner from './Diners.png';
import Amex from './Amex.png'
import MasterCard from './MasterCard.png'
import PayPal from './PayPal.png'
import Frame from './Frame.png'

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#1a3d3d] text-white overflow-hidden" id='contact'>
      
      {/* --- MOBILE & TABLET VIEW --- */}
      <div className="lg:hidden">
        
        {/* Cinematic Brand Header */}
        <div className="py-16 px-6 text-center bg-gradient-to-b from-[#1a3d3d] to-[#142e2e]">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            src={img} 
            className="h-28 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]"
          />
          <h2 className="text-4xl font-serif uppercase  leading-none">Himala <br/> <span className="text-[#c5a059]">Hills</span></h2>
          <p className="text-[#c5a059] text-xs font-bold uppercase tracking-[0.3em] mt-2 italic opacity-80">The Essence of Purity</p>
        </div>

        {/* Trust Slider */}
        <div className="flex overflow-x-auto snap-x no-scrollbar px-6 gap-4 py-8 border-y border-white/5 bg-[#142e2e]">
          {[
            { icon: ShieldCheck, title: "Lab Certified", desc: "Purity Guaranteed" },
            { icon: Truck, title: "Global Shipping", desc: "Tracked Delivery" },
            { icon: RotateCcw, title: "30-Day Returns", desc: "100% Guarantee" }
          ].map((item, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[70vw] bg-white/5 p-5 rounded-2xl border border-white/10 flex items-center gap-4">
              <item.icon className="text-[#c5a059] w-8 h-8" />
              <div>
                <h4 className="font-black uppercase text-[10px] tracking-widest">{item.title}</h4>
                <p className="text-gray-400 text-[9px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Accordion Sections */}
        <div className="px-6 py-10 space-y-4">
          {[
            { 
              id: 'explore', 
              title: 'Explore', 
              content: [
                { label: 'Shop All Products', link: '#product' }, 
                { label: 'Wholesale Inquiries', link: '#wholesale' }, 
            
                { label: 'Lab Certificates', link: '#Certificates' }
              ] 
            },
            { 
              id: 'support', 
              title: 'Support', 
              content: [
                { label: 'Contact Us', link: '#contact' }, 
                { label: 'Shipping Policy', link: '#' }, 
                { label: 'Returns & FAQ', link: '#' }, 
                { label: 'Terms of Service', link: '#' }
              ] 
            }
          ].map((section) => (
            <div key={section.id} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => toggle(section.id)}
                className="w-full flex justify-between items-center py-2"
              >
                <span className="text-sm font-black uppercase tracking-[0.2em] text-[#c5a059]">{section.title}</span>
                <ChevronDown className={`transition-transform duration-500 ${openSection === section.id ? 'rotate-180' : ''}`} size={18} />
              </button>
              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-4 py-4">
                      {section.content.map(item => (
                        <a key={item.label} href={item.link} className="text-gray-400 text-sm font-bold hover:text-white">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Newsletter */}
       <div className="mx-6 p-8 rounded-[2.5rem] bg-[#c5a059] text-[#1a3d3d] mb-12 relative overflow-hidden">
  <div className="relative z-10">
    <h3 className="text-2xl font-black uppercase leading-none mb-2">
      Connect <br /> On WhatsApp
    </h3>
    <p className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-80">
      Instant support & wellness tips.
    </p>
    
    <div className="relative">
      <a 
       href="https://wa.me/923333058456"
// Replace with your actual number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full bg-[#1a3d3d] text-[#c5a059] px-6 py-4 rounded-2xl font-black text-xs tracking-widest hover:scale-[1.02] transition-transform"
      >
        CHAT WITH US
        <Send size={18} className="rotate-45" />
      </a>
    </div>
  </div>
  
  {/* Decorative Circle */}
  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
</div>

        {/* Bottom Socials & Disclaimer */}
        <div className="bg-[#142e2e] py-12 px-6 text-center">
          <div className="bg-[#142e2e] py-12 px-6 text-center">
  <div className="flex justify-center gap-6 mb-8">
    <a href="https://www.instagram.com/HimalaHills/" target="_blank" rel="noopener noreferrer">
      <Instagram size={20} className="text-gray-400" />
    </a>
    <a href="https://www.facebook.com/HimalaHills" target="_blank" rel="noopener noreferrer">
      <Facebook size={20} className="text-gray-400" />
    </a>
    <a href="https://www.youtube.com/@HimalaHillsShilajit" target="_blank" rel="noopener noreferrer">
      <Youtube size={20} className="text-gray-400" />
    </a>
    <a href="https://www.linkedin.com/company/himalahills/" target="_blank" rel="noopener noreferrer">
      <Mail size={20} className="text-gray-400" /> {/* Using Mail icon for LinkedIn, or you can import LinkedIn icon */}
    </a>
  </div>
  <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold mb-6">© {new Date().getFullYear()} Himala Hills</p>
  <div className="flex flex-wrap justify-center gap-4 opacity-30 grayscale mb-6">
    <img src={MasterCard} className="h-4" alt="" />
    <img src={PayPal} className="h-4" alt="" />
    <img src={Amex} className="h-4" alt="" />
  </div>
  <p className="text-[9px] text-gray-700 leading-tight">
    *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
  </p>
</div>

          
         
        </div>
      </div>

      {/* --- DESKTOP VIEW (UNTOUCHED ORIGINAL) --- */}
      <div className="hidden lg:block max-w-7xl mx-auto pt-20 pb-10 px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-[#c5a059] w-10 h-10" />
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm">Lab Certified</h4>
              <p className="text-gray-400 text-xs">Purity & Potency Guaranteed</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Truck className="text-[#c5a059] w-10 h-10" />
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm">Global Shipping</h4>
              <p className="text-gray-400 text-xs">Fast, secure tracked delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RotateCcw className="text-[#c5a059] w-10 h-10" />
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm">30-Day Returns</h4>
              <p className="text-gray-400 text-xs">100% Satisfaction Guarantee</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          <div className="lg:col-span-1 space-y-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={img} alt="Logo" className="h-24 w-24 object-contain" />
              <div>
                <h1 className="text-3xl md:text-4xl uppercase font-serif tracking-tighter">Himala Hills</h1>
                <p className="text-[#c5a059] font-medium italic">The Essence of Purity</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sourcing the highest quality Shilajit resin directly from the heart of the Himalayas. We bridge ancient wisdom with modern wellness.
            </p>
           {/* Desktop Socials - unchanged layout, only add links */}
<div className="flex gap-4 justify-center md:justify-start">
  <a href="https://www.facebook.com/HimalaHills" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#c5a059] transition-all duration-300">
    <Facebook size={18} />
  </a>
  <a href="https://www.twitter.com/HimalaHills" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#c5a059] transition-all duration-300">
    <Twitter size={18} />
  </a>
  <a href="https://www.instagram.com/HimalaHills/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#c5a059] transition-all duration-300">
    <Instagram size={18} />
  </a>
  <a href="https://www.youtube.com/@HimalaHillsShilajit" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#c5a059] transition-all duration-300">
    <Youtube size={18} />
  </a>
  <a href="https://www.linkedin.com/company/himalahills/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#c5a059] transition-all duration-300">
    <Mail size={18} /> {/* Again, placeholder for LinkedIn icon */}
  </a>
</div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-[#c5a059]">Explore</h3>
            <nav className="flex flex-col gap-3">
              <a href="#product" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all">Shop All Products</a>
              <a href="#wholesale" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all">Wholesale Inquiries</a>
              <a href="#Certificates" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all">Lab Certificates</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-[#c5a059]">Support</h3>
            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#c5a059]" />
                <span className="text-sm">support@himalahills.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#c5a059]" />
                <span className="text-sm">+923333058456</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c5a059] mt-1" />
                <span className="text-sm">Himalayan Base Camp,<br/>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold uppercase tracking-widest text-[#c5a059]">Stay Updated</h3>
            <p className="text-xs text-gray-400">Get exclusive offers and Himalayan wellness tips via WhatsApp.</p>
            <div className="relative w-full">
              <a href="https://wa.me/923333058456" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#25D366] text-white font-bold rounded-lg px-4 py-3 text-sm hover:bg-[#1ebe57] transition-colors">
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Himala Hills. All Rights Reserved.
            </p>
            <p className="text-[10px] text-gray-600 mt-2 max-w-md">
              *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <img src={Frame} alt="Discover" className="h-6 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
            <img src={MasterCard} alt="Discover" className="h-6 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
            <img src={Amex} alt="Discover" className="h-6 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
            <img src={PayPal} alt="Discover" className="h-6 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
            <img src={Diner} alt="Diner" className="h-6 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
            <img src={Discover} alt="Discover" className="h-6 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </footer>
  );
}