import { motion } from 'framer-motion';
import bg from './bgimg.png';
import d2 from './d 2.png';
import img from './Asset 1 1.png';

const HowToUse = () => {
  const steps = [
    { id: "01", text: "Take a pea-sized amount (300–500 mg)." },
    { id: "02", text: "Mix in warm water, milk, or green tea." },
    { id: "03", text: "Use once or twice daily for best results." },
    { id: "04", text: "Store in a cool, dry place." }
  ];

  return (
    <section
      className="relative py-20 lg:py-40 bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* --- MOBILE & TABLET VIEW (Mind-Blowing Interactive Steps) --- */}
      <div className="lg:hidden relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-black tracking-tighter mb-2">How to Use</h2>
          <div className="h-1 w-20 bg-[#c5a059]" />
        </motion.div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-center gap-5"
            >
              <span className="text-4xl font-black text-white/20 group-hover:text-[#c5a059] transition-colors">
                {step.id}
              </span>
              <p className="text-lg font-medium leading-tight tracking-tight">
                {step.text}
              </p>
              
              {/* Subtle accent glow for mobile */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#c5a059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-12 flex justify-center"
        >
          <img src={d2} alt="" className="h-12 drop-shadow-2xl" />
        </motion.div>
        
        {/* Floating background element for mobile style */}
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-[#c5a059]/20 blur-[100px] pointer-events-none" />
      </div>

      {/* --- DESKTOP VIEW (Untouched Original Logic) --- */}
      <div className="hidden lg:block relative max-w-5xl mx-auto px-6 text-start">
        <h2 className="text-6xl tracking-tighter font-bold">How to Use</h2>
        <p className="text-lg font-medium leading-5 tracking-tighter max-w-xl mt-1">
          Take a pea-sized amount (300–500 mg).<br />
          Mix in warm water, milk, or green tea.<br />
          Use once or twice daily for best results.<br />
          Store in a cool, dry place.
        </p>
        <img src={d2} alt="" className="h-16 mt-10" />
      </div>

      {/* Desktop Image Section (Hidden on Mobile as per original) */}
      <img
        src={img}
        alt=""
        className="absolute top-1/2 right-0 transform -translate-y-1/2 h-140 hidden lg:block"
      />
    </section>
  );
};

export default HowToUse;