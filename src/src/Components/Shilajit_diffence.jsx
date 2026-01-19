import React from "react";
import Labbg1 from './LABbg 2.png'
import Labbg2 from './LABbg.png'
import Labbg3 from './Labbg2.png'
const ShilajitDifference = () => {
  return (
    <section className="bg-[#FFF9EE] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-left mb-5">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a3d3d] tracking-tight leading-tight">
            Not All Shilajit Is Equal.<br />
          </h2>
            <p className="text-4xl font-medium  text-[#997920] ">Here’s the Difference.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">
          
          {/* LEFT BIG CARD - Altitude */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[400px] md:h-full">
            <img 
              src={Labbg2} 
              alt="Himalayan Mountains"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
            />
         
            <div className="absolute top-0 p-8 md:p-12">
              <span className="bg-gradient-to-r from-[#FFC936] to-[#997920]  text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">5,000M+ ALTITUDE</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Altitude-Certified Sourcing</h3>
              <p className="text-gray-200 text-lg leading-relaxed max-w-md">
                Harvested exclusively above 5,000 meters in the Himalayas where pollution can't reach and purity is guaranteed.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE COLUMN */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* TOP RIGHT CARD - Lab Tested */}
            <div className="relative group overflow-hidden rounded-3xl shadow-lg flex-1">
              <img 
                src={Labbg2}
                alt="Laboratory testing"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
              />
           
              <div className="relative h-full p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Triple-Purified & Lab-Tested</h3>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  Every batch undergoes three-stage purification and independent testing. We're the only brand conducting long-term stability testing.
                </p>
                <a href="#" className="text-[#FFC936]   font-bold text-base flex items-center gap-2 hover:underline">
                  See lab results 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            </div>

            {/* BOTTOM RIGHT CARD - Experts */}
            <div className="relative group  overflow-hidden rounded-3xl shadow-lg flex-1">
              <img 
                src={Labbg3}
                alt="Ayurvedic expert"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
              />
             
              <div className="relative h-full p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Formulated by Ayurvedic Experts</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Developed in partnership with researchers who've spent decades studying traditional Himalayan medicine and modern bioavailability science.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShilajitDifference;
