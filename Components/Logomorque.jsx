import React from "react";

import logo1 from "./logos (1).png";
import logo2 from "./logos (2).png";

import logo4 from "./logos (4).png";
import logo5 from "./logos (5).png";
import logo6 from "./logos (6).png";
import logo7 from "./logos (7).png";
import logo8 from "./logos (8).png";
import logo9 from "./logos (9).png";

const logos = [logo1, logo2,  logo4, logo5,logo6,logo7,logo8,logo9];

const LogosMarquee = () => {
  return (
    <div className=" bg-gradient-to-r from-[#FFC936] to-[#997920] overflow-hidden  relative">
      <div className="flex items-center  justify-center  md:gap-16 whitespace-nowrap animate-marquee">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Certification Logo"
            className="h-30 md:h-40  object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default LogosMarquee;
