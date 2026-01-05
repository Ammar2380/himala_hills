import bgimg from './bg.png'
import img from './Asset 1 1.png';
const points = [
  "100% Himalayan Origin",
  "Pure Resin – No Fillers",
  "Rich in Fulvic Acid",
  "Tested for Purity",
];

const WhyChoose = () => {
  return (
   <section
  className="relative min-h-[400px] py-24 text-white"style={{
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  
>
 

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto  px-6" >
    <h2 className="text-3xl font-bold mb-8">
      Why Choose Himala Hills?
    </h2>

    <ul className="space-y-4">
      {points.map((p, i) => (
        <li key={i}>✔ {p}</li>
      ))}
    </ul>
  </div>
   <img
          src={img}
          alt=""
          className="absolute hidden md:block top-1/2 right-0 transform -translate-y-1/2 h-90"
        />
</section>

  );
};

export default WhyChoose;
