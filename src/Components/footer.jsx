import React from 'react';
import img from './Asset 1 2.png';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Discover from './Discover.png';
import Diner from './Diners.png';

export default function Footer() {
  return (
    <footer className="bg-[#1a3d3d] text-white py-12 px-6 md:px-8" id='contact'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Logo + Brand */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-4">
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
              <img
                src={img}
                alt="Logo"
                className="h-40 w-40 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl uppercase font-serif">Himala Hills</h1>
              <p className="text-lg text-white">Premium Himalayan Shilajit Resin</p>
            </div>
          </div>

          {/* Email Subscribe + Social Icons */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="relative w-full max-w-xs ">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-500 rounded-sm px-5 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex  items-center justify-center  hover:bg-gray-100 transition-colors">
                <span className="text-[#1a3d3d] text-xl">→</span>
              </button>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><Youtube size={24} /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white">Powered by Hayviral</p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-800 font-bold text-xs cursor-pointer">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <div className="flex gap-0.5 cursor-pointer">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full -ml-1.5"></div>
              </div>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs cursor-pointer">AMEX</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-700 font-bold text-xs cursor-pointer">PayPal</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <img src={Diner} alt="" className="h-5 object-contain" />
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <img src={Discover} alt="" className="h-5 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
