import bg from './bgimg.png';
import d2 from './d 2.png';
import img from './Asset 1 1.png';

const HowToUse = () => {
  return (
    <section
      className="relative py-40 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-start">
        <h2 className="text-6xl  tracking-tighter font-bold md:text-left text-center">How to Use</h2>
        <p className="text-lg md:text-left text-center font-medium leading-5 tracking-tighter  max-w-xl mt-1">
          Take a pea-sized amount (300–500 mg).<br />
          Mix in warm water, milk, or green tea.<br />
          Use once or twice daily for best results.<br />
          Store in a cool, dry place.
        </p>
        <img src={d2} alt="" className="h-16 mt-10" />
      </div>

      {/* Right-aligned image - HIDE on mobile */}
      <img
        src={img}
        alt=""
        className="absolute top-1/2 right-0 transform -translate-y-1/2 h-140 hidden sm:block"
      />
    </section>
  );
};

export default HowToUse;
