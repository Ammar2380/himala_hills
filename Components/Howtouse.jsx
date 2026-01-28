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
  {/* --- Background Glows --- */}
  <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#c5a059]/15 blur-[120px] pointer-events-none" />
  <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#c5a059]/10 blur-[150px] pointer-events-none" />

  <h2 className="relative z-10 text-6xl tracking-tighter font-bold mb-10">How to Use</h2>
  
  {/* The 2x2 Grid with Backdrop Blur */}
  <div className="relative z-10 grid grid-cols-2 gap-x-12 gap-y-10 max-w-2xl">
    {[
      { id: "01", text: "Take a pea-sized amount (300–500 mg)." },
      { id: "02", text: "Mix in warm water, milk, or green tea." },
      { id: "03", text: "Use once or twice daily for best results." },
      { id: "04", text: "Store in a cool, dry place." }
    ].map((step) => (
      <div key={step.id} className="relative group">
        {/* Step Label */}
        <span className="block text-[#c5a059] text-sm font-black mb-2 opacity-70 tracking-[0.2em]">
          STEP {step.id}
        </span>
        
        {/* Point with Glassmorphism Border */}
        <div className="relative p-4 -ml-4 rounded-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
          <p className="text-xl font-medium leading-tight tracking-tighter border-l-2 border-[#c5a059]/30 pl-4 border-[#c5a059] transition-all">
            {step.text}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Branding Logo */}
  <img src={d2} alt="" className="relative z-10 h-16 mt-12 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]" />
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