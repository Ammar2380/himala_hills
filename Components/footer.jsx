import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from './Asset 1 2.png';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ShieldCheck, Truck, RotateCcw, ChevronDown, Send, Linkedin } from 'lucide-react';
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
    /* FIXED: Added a max-height container logic for ultra-wide screens */
    <footer className="bg-[#1a3d3d] text-white -scroll-m-150 overflow-hidden border-t border-white/5" id='contact'>
      
      {/* --- MOBILE & TABLET VIEW --- */}
      <div className="lg:hidden">
        {/* Optimized Header Height */}
        <div className="py-12 px-6 text-center bg-gradient-to-b from-[#1a3d3d] to-[#142e2e]">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            src={img} 
            className="h-60 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]"
          />
          <h2 className="text-3xl font-cinzel uppercase leading-tight">Himala <br/> <span className="text-[#c5a059]">Hills</span></h2>
          <p className="text-[#c5a059] text-[10px] font-cinzel uppercase tracking-[0.3em] mt-2 italic opacity-80">The Essence of Purity</p>
        </div>

        {/* Trust Slider */}
        <div className="flex overflow-x-auto snap-x no-scrollbar px-6 gap-4 py-6 border-y border-white/5 bg-[#142e2e]">
          {[
            { icon: ShieldCheck, title: "Lab Certified", desc: "Purity Guaranteed" },
            { icon: Truck, title: "Global Shipping", desc: "Tracked Delivery" },
            { icon: RotateCcw, title: "30-Day Returns", desc: "100% Guarantee" }
          ].map((item, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[75vw] bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
              <item.icon className="text-[#c5a059] w-6 h-6" />
              <div>
                <h4 className="font-black uppercase text-[9px] tracking-widest">{item.title}</h4>
                <p className="text-gray-400 text-[8px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Accordion */}
        <div className="px-6 py-6 space-y-2">
          {[
            { id: 'explore', title: 'Explore', content: [{ label: 'Shop All Products', link: '#product' }, { label: 'Wholesale', link: '#wholesale' }, { label: 'Lab Certificates', link: '#Certificates' }] },
            // { id: 'support', title: 'Support', content: [{ label: 'Contact Us', link: '#contact' }, { label: 'Shipping Policy', link: '#' }, { label: 'Returns & FAQ', link: '#' }] }
          ].map((section) => (
            <div key={section.id} className="border-b border-white/10 pb-2">
              <button onClick={() => toggle(section.id)} className="w-full flex justify-between items-center py-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c5a059]">{section.title}</span>
                <ChevronDown className={`transition-transform ${openSection === section.id ? 'rotate-180' : ''}`} size={16} />
              </button>
              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="flex flex-col gap-3 pb-4">
                      {section.content.map(item => (
                        <a key={item.label} href={item.link} className="text-gray-400 text-xs font-bold">{item.label}</a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mx-6 p-6 rounded-[2rem] bg-[#c5a059] text-[#1a3d3d] mb-10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-black uppercase leading-tight mb-1">Connect <br /> On WhatsApp</h3>
            <p className="text-[9px] font-bold uppercase tracking-widest mb-4 opacity-80">Instant support & tips.</p>
            <a href="https://wa.me/923333058456" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-[#1a3d3d] text-[#c5a059] px-5 py-3 rounded-xl font-black text-[10px] tracking-widest">
              CHAT WITH US <Send size={14} className="rotate-45" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#142e2e] py-8 px-6 text-center">
          <div className="flex justify-center gap-5 mb-6">
            <a href="https://www.instagram.com/HimalaHills/" target="_blank" rel="noopener noreferrer"><Instagram size={18} className="text-gray-400" /></a>
            <a href="https://www.facebook.com/HimalaHills" target="_blank" rel="noopener noreferrer"><Facebook size={18} className="text-gray-400" /></a>
            <a href="https://www.youtube.com/@HimalaHillsShilajit" target="_blank" rel="noopener noreferrer"><Youtube size={18} className="text-gray-400" /></a>
          </div>
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-bold mb-4">© {new Date().getFullYear()} Himala Hills</p>
          <div className="flex justify-center gap-3 opacity-30 grayscale mb-4">
            <img src={MasterCard} className="h-3" alt="" /><img src={PayPal} className="h-3" alt="" /><img src={Amex} className="h-3" alt="" />
          </div>
          <p className="text-[8px] text-gray-700">*FDA Disclaimer: Not intended to diagnose or treat.</p>
        </div>
      </div>

      {/* --- DESKTOP VIEW (FIXED FOR 2K/4K) --- */}
      {/* 1. Used clamp() for padding so it doesn't get too huge on 4K.
          2. Used max-w-7xl to keep content from stretching too wide.
      */}
      <div className="hidden lg:block max-w-7xl mx-auto px-12" style={{ paddingTop: 'clamp(3rem, 5vh, 6rem)', paddingBottom: 'clamp(2rem, 3vh, 4rem)' }}>
        
        {/* Top Trust Bar - Reduced vertical margin */}
        <div className="grid grid-cols-3 gap-8 mb-10 pb-6 border-b border-white/10">
          {[{ icon: ShieldCheck, t: "Lab Certified", s: "Purity Guaranteed" }, { icon: Truck, t: "Global Shipping", s: "Secure Delivery" }, { icon: RotateCcw, t: "30-Day Returns", s: "100% Guarantee" }].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="text-[#c5a059] w-8 h-8" />
              <div>
                <h4 className="font-bold uppercase tracking-wider text-xs">{item.t}</h4>
                <p className="text-gray-400 text-[10px]">{item.s}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Brand Info */}
          <div className="col-span-4 space-y-5">
            <div className="flex flex-col gap-3">
              <img src={img} alt="Logo" className="h-30 w-30 object-contain" />
              <div>
                <h1 className="text-2xl uppercase font-cinzel tracking-tight">Himala Hills</h1>
                <p className="text-[#c5a059] text-xs font-medium italic">The Essence of Purity</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Sourcing the highest quality Shilajit resin directly from the heart of the Himalayas. We bridge ancient wisdom with modern wellness.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#c5a059] hover:text-[#1a3d3d] transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#c5a059]">Explore</h3>
            <nav className="flex flex-col gap-2 text-xs">
              <a href="#product" className="text-gray-300 hover:text-white transition-all">Shop All</a>
              <a href="#wholesale" className="text-gray-300 hover:text-white transition-all">Wholesale</a>
              <a href="#Certificate" className="text-gray-300 hover:text-white transition-all">Lab Certificates</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#c5a059]">Support</h3>
            <div className="flex flex-col gap-3 text-gray-300 text-xs">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#c5a059]" /> <span>himalahills@gmail.com </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#c5a059]" /> <span>+923333058456</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#c5a059]" /> <span>Himalayan Base Camp, Nepal</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="col-span-3 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-2">Stay Updated</h3>
            <p className="text-[10px] text-gray-400 mb-4">Get exclusive offers via WhatsApp.</p>
            <a href="https://wa.me/923333058456" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#25D366] text-white font-bold rounded-lg py-2.5 text-xs hover:bg-[#1ebe57] transition-colors">
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright Bar - Reduced height */}
        <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Himala Hills. All Rights Reserved.
            </p>
            <p className="text-[9px] text-gray-600 mt-1 max-w-sm">
              *These statements have not been evaluated by the FDA.
            </p>
          </div>
          <div className="flex gap-3 grayscale opacity-40">
            {[MasterCard, Amex, PayPal, Diner, Discover].map((src, i) => (
              <img key={i} src={src} alt="Payment" className="h-4" />
            ))}
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