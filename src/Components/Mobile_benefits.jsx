import React from "react";
import B1 from "./benefits (1).png";
import B2 from "./benefits (2).png";
import B3 from "./benefits (3).png";
import B4 from "./benefits (4).png";
import B5 from "./benefits (5).png";
import B6 from "./benefits (6).png";
import B7 from "./benefits (7).png";
import B8 from "./benefits (8).png";
import product from "./SOURCE 1.png";
import grp1 from './Group 9.png';
import grp2 from './Group 10.png';

const MobileBenefits = () => {
  return (
    <section className="bg-[#FFF9EE] py-12 block md:hidden">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">
        SHILAJIT KEY BENEFITS
      </h2>

      {/* Top Benefits */}
      <div className="max-w-md mx-auto flex flex-col gap-6">
        {[B4, B3, B2, B1].map((imgSrc, i) => (
          <div key={i} className="flex items-center gap-4">
            <img src={imgSrc} alt="" className="w-10" />
            <p className="font-semibold">
              {["Boosts Energy","Reduces Fatigue","Strengthens Immunity","Stamina & Focus"][i]}
            </p>
          </div>
        ))}
      </div>

      {/* Product Image */}
      <div className="my-6 flex justify-center">
        <img src={product} alt="Shilajit" className="w-60" />
      </div>

      {/* Bottom Benefits */}
      <div className="max-w-md mx-auto flex flex-col gap-6">
        {[B8, B7, B6, B5].map((imgSrc, i) => (
          <div key={i} className="flex items-center gap-4">
            <img src={imgSrc} alt="" className="w-10" />
            <p className="font-semibold">
              {["Balances Hormones","Promotes Healthy Aging","Cell Regeneration","Supports Brain Function"][i]}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Graphics */}
      <div className="flex justify-center mt-8 gap-4">
        <img src={grp1} alt="" className="h-16" />
        <img src={grp2} alt="" className="h-16" />
      </div>
    </section>
  );
};

export default MobileBenefits;
