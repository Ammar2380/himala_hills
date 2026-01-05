import React from "react";
import certImg1 from "./LAB_REPORTS_COMBINED.webp";
import certImg2 from "./CERTIFICATES_COMBINED.webp";

const Certifications = () => {
  return (
    <section className="bg-[#FFF9EE] py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-25 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Certification Image */}
        <div className="flex justify-center md:justify-start order-1 md:order-none">
          <img
            src={certImg2}
            alt="Certifications"
            className="max-w-md w-full shadow-lg"
          />
        </div>

        {/* Certification Content */}
        <div className="order-2 md:order-none">
          <h4 className="uppercase tracking-wide text-sm font-semibold text-[#1a3d3d]">
            Our Certifications
          </h4>
          <h2 className="text-4xl font-bold mt-2">
            Proof of Trust & Excellence
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We don’t just claim purity. We prove it with internationally
            recognized certifications. Every step of our process is built on
            strict compliance with global food safety and quality management
            standards. Pure Natural Shilajit proudly holds:
          </p>

          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✅ GMP (Good Manufacturing Practices)</li>
            <li>✅ ISO 22000</li>
            <li>✅ HACCP (Hazard Analysis and Critical Control Points)</li>
          </ul>

          <button className="mt-6 inline-block border border-[#1a3d3d] text-[#1a3d3d] px-6 py-3 rounded-full hover:bg-[#1a3d3d] hover:text-white transition">
            View Our Certificates
          </button>
        </div>

        {/* Lab Report Content */}
        <div className="order-4 md:order-none">
          <h3 className="text-2xl font-bold">
            Independent Lab Reports
          </h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            <span className="font-semibold">Verified Purity, Verified Power.</span>{" "}
            We believe true authenticity comes from transparency. That’s why
            every single batch of our Himalayan Gold Grade Shilajit goes
            through rigorous third-party testing at multiple stages, conducted
            by world-renowned labs like Eurofins.
          </p>

          <p className="text-gray-700 mt-4">Our reports confirm:</p>

          <ul className="mt-4 space-y-2 text-gray-800">
            <li>✅ High Fulvic Acid Content (60–75%)</li>
            <li>✅ Zero Heavy Metals</li>
            <li>✅ No Microbial Contamination</li>
            <li>✅ Comprehensive Analysis</li>
          </ul>

          <button className="mt-6 inline-block border border-[#1a3d3d] text-[#1a3d3d] px-6 py-3 rounded-full hover:bg-[#1a3d3d] hover:text-white transition">
            View Our Lab Reports
          </button>
        </div>

        {/* Lab Report Image */}
        <div className="flex justify-center md:justify-end order-3 md:order-none">
          <img
            src={certImg1}
            alt="Lab Reports"
            className="max-w-md w-full shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Certifications;
