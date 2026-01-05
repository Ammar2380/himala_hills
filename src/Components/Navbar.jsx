import React, { useEffect, useRef, useState } from "react";
import logo from "./Logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // state for mobile menu
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let x = 0;
    const speed = 0.5;

    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= marquee.scrollWidth / 2) {
        x = 0;
      }
      marquee.style.transform = `translateX(${x}px)`;
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
      setIsOpen(false); // close menu after click
    }
  };

  return (
    <>
      {/* Navbar */}
      <section className="w-full bg-[#1e1c1b] fixed top-0 z-50 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-3 px-4 md:px-8">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-8 md:h-10 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex list-none text-sm cursor-pointer text-white space-x-8">
            {sections.map((section) => (
              <li
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="hover:text-yellow-400 transition-colors"
              >
                {section.label}
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden  bg-[#1e1c1b] text-white w-full transition-max-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96 py-3x" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4">
            {sections.map((section) => (
              <li
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="hover:text-yellow-400  border-1 border-[#ffffff] space-y-1  rounded-lg w-60 text-center transition-colors text-lg"
              >
                {section.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full overflow-hidden  bg-gradient-to-r from-[#FFC936] to-[#997920] mt-14">
        <div ref={marqueeRef} className=" flex md:relative md:top-1  justify-center items-center w-max text-white text-sm py-2 md:py-3">
          <span className="mx-8">Free Delivery All Over UK</span>
          <span className="mx-8">Himala Hills</span>
          <span className="mx-8">🔥 Limited Stock – Order Now</span>
          <span className="mx-8">Free Delivery All Over UK</span>
          <span className="mx-8">Himala Hills</span>
          <span className="mx-8">🔥 Limited Stock – Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
