import B1 from "./benefits (1).png";
import B2 from "./benefits (2).png";
import B3 from "./benefits (3).png";
import B4 from "./benefits (4).png";
import B5 from "./benefits (5).png";
import B6 from "./benefits (6).png";
import B7 from "./benefits (7).png";
import B8 from "./benefits (8).png";
import MobileBenefits from "./Mobile_benefits";
import grp1 from './Group 9.png'
import grp2 from './Group 10.png'

import arrowLeft from "./Arrow 2.png";
import arrowRight from "./Arrow 1.png";
import product from "./SOURCE 1.png";

const Benefits = () => {
  return (
    <section className="bg-[#FFF9EE]  py-24 relative"id="shilajit">
       <div className="hidden md:block">
      <h2 className="text-4xl font-bold text-center mb-24">
        SHILAJIT KEY BENEFITS
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-6 relative">

      
        <div className="flex flex-col gap-10 relative">

        
          <div className="relative text-center bottom-8  ">
            <img src={B4} className="w-10   mx-auto mb-2" />
            <p className="font-semibold">Boosts Energy</p>
            <img
              src={arrowLeft}
              className="absolute right-[-80px] top-20  -translate-y-1/2 rotate-[10deg]"
            />
          </div>

          {/* Reduces Fatigue */}
          <div className="relative text-center">
            <img src={B3} className="w-10 mx-auto mb-2" />
            <p className="font-semibold">Reduces Fatigue</p>
            <img
              src={arrowLeft}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 rotate-[-10deg]"
            />
          </div>

          {/* Strengthens Immunity */}
          <div className="relative text-center">
            <img src={B2} className="w-10 mx-auto mb-2" />
            <p className="font-semibold">Strengthens Immunity</p>
            <img
              src={arrowLeft}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 rotate-[-15deg]"
            />
          </div>

          {/* Stamina & Focus */}
          <div className="relative text-center">
            <img src={B1} className="w-10 mx-auto mb-2" />
            <p className="font-semibold">Stamina & Focus</p>
            <img
              src={arrowLeft}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 rotate-[-25deg]"
            />
          </div>
        </div>

        {/* ================= CENTER PRODUCT ================= */}
        <div className="flex justify-center relative">
          <img
            src={product}
            alt="Shilajit"
            className="w-[340px] drop-shadow-2xl z-10"
          />
        </div>
        

       
<div className="flex flex-col justify-center items-center gap-10 left-10  ">

 
  <div className="relative bottom-10  flex-col flex justify-center items-center  w-60">
    <img src={B8} className="w-10 mb-2 " />
    <p className="font-semibold leading-snug">
      Balances Hormones
    </p>

    <img
      src={arrowRight}
      className="absolute left-[-90px]  top-10   scale-x-[-1] rotate-[25deg]"
    />
  </div>

  
  <div className="relative  flex-col flex justify-center items-center ">
    <img src={B7} className="w-10 mb-2" />
    <p className="font-semibold leading-snug">
      Promotes Healthy Aging
    </p>

    <img
      src={arrowRight}
      className="absolute left-[-150px]  scale-x-[-1] rotate-[40deg]"
    />
  </div>

  {/* Cell Regeneration */}
  <div className="relative  flex-col flex justify-center items-center ">
    <img src={B6} className="w-10 mb-2 " />
    <p className="font-semibold leading-snug">
      Cell Regeneration
    </p>

    <img
      src={arrowRight}
      className="absolute left-[-150px]  top-1/2 -translate-y-1/2 scale-x-[-1] rotate-[44deg]"
    />
  </div>

 
  <div className="relative flex-col flex  justify-center items-center ">
    <img src={B5} className="w-10 mb-2 " />
    <p className="font-semibold leading-snug">
      Supports Brain Function
    </p>

    <img
      src={arrowRight}
      className="absolute left-[-130px] top-1/2 -translate-y-1/2 scale-x-[-1] rotate-[47deg]"
    />
  </div>

</div>

       

      </div>
<div className="flex justify-center relative z-10 h-1 bottom-90">

      <img src={grp1} alt="" className="relative h-24 top-10  " />
      <img src={grp2} alt="" className=" h-24 relative top-30 " />
      </div> 
      </div>
      <MobileBenefits/>
    </section>
  );
};

export default Benefits;
