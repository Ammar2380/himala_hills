import img1 from './imgs (1).png'
import img2 from './imgs (2).png'
import img3 from './imgs (3).png'
import img4 from './imgs (4).png'

const Minerals = () => {
  return (
    <section className="bg-[#123C2C] text-white py-4">
      
      {/* CONTENT COLUMN */}
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        
        <h2 className="text-3xl md:text-7xl font-bold leading-15 uppercase">
          Mineral Composition <br /> of Shilajit
        </h2>

        <p className="opacity-90 max-w-3xl font-mono">
          Himala Hills Shilajit contains over 84+ essential minerals,
          including: Magnesium • Zinc • Iron • Potassium • Calcium •
          Manganese • Copper • Selenium and the key component Fulvic Acid,
          which enhances nutrient absorption.
        </p>

        {/* IMAGES + TEXT */}
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          
          <div className="flex flex-col items-center gap-3">
            <img src={img1} className="h-64 object-contain" alt="" />
            <p className="text-medium font-medium text-center">
              Physical Strength
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={img2} className="h-64 object-contain" alt="" />
            <p className="text-medium font-medium text-center">
              Heart & Mental Health
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={img3} className="h-64 object-contain" alt="" />
            <p className="text-medium font-medium text-center">
              Male Fertility
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={img4} className="h-64 object-contain" alt="" />
            <p className="text-sm font-medium text-center">
              Skin Glow & Anti-Aging
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Minerals;
