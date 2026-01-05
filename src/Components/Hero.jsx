import heroBg from "./image 2.png";
import heroimg from './Hero Product.png';

const Hero = () => {
  return (
    <section
      className="relative min-h-[500px] scroll-m-100 flex justify-center items-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home" 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Container */}
      <div className="relative w-full max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left Content */}
        <div className="max-w-xl z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Himala Hills <br /> Premium Himalayan  Shilajit Resin
          </h1>

          <p className="mt-2 text-xl md:text-3xl opacity-90 tracking-tighter">
            Health is Life - Live It Naturally
          </p>

          <p className="font-medium pt-2">
            "Sun Dried & Hand Harvested at 18000 ft in the Sacred <br className="hidden md:block" /> Heights of Himalayas"
          </p>

          <button className="cursor-pointer mt-4 bg-gradient-to-r from-[#FFC936] to-[#997920] text-black px-6 py-2 rounded-full font-semibold text-xs">
            Try Gold Shilajit
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end w-full md:w-[900px] mt-8 md:mt-0">
  <img
    src={heroimg}
    alt="Himalayan Shilajit"
    className="relative w-full  md:w-[900px] md:relative md:top-29 top-5 md:left-6 h-auto z-0 object-contain"
  />
</div>


      </div>
    </section>
  );
};

export default Hero;
