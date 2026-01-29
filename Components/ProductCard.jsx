import { motion } from "framer-motion";
import Rating from "./Rating";

// Your specific PNG imports
import Product1 from "./Frame 6.jpg";
import Product2 from "./Frame 8.jpg";
import Product3 from "./Frame 7.jpg";

// 1. Updated to Pakistani Rupees
const formatPrice = (amt) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  }).format(amt);

const ProductCard = ({ product, onSelect }) => {
  const mainVariant = product.variants?.[0] || { price: 0, oldPrice: 0, name: 'N/A' };

  const handleSelect = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    onSelect(product, rect.top);
  };

  const getProductImage = (id) => {
    switch (id) {
      case 1: return Product3;
      case 2: return Product1;
      case 3: return Product2;
      default: return Product1;
    }
  };

  // 2. Fixed Discount Logic (Checks if oldPrice exists to prevent NaN)
  const discount = mainVariant.oldPrice > 0 
    ? Math.round(((mainVariant.oldPrice - mainVariant.price) / mainVariant.oldPrice) * 100)
    : 0;

  return (
    <>
      {/* --- DESKTOP VERSION --- */}
      <div
        onClick={handleSelect}
        className="hidden md:block cursor-pointer bg-[#f9efd9] rounded-[2rem] p-4 transition-transform hover:-translate-y-1"
      >
        <div className="relative bg-white rounded-[1.75rem] overflow-hidden mb-4">
          <span className="absolute top-4 left-4 z-10 bg-white px-4 py-1 rounded-full text-xs font-bold shadow">
            Premium Himalayan Grade
          </span>
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={getProductImage(product.id)} 
            alt={product.name}
            className="w-full aspect-square object-contain"
          />
        </div>
        <h3 className="font-semibold text-[17px] mb-2 leading-snug px-1">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-2 px-1">
          {mainVariant.oldPrice > 0 && (
            <span className="text-gray-400 line-through font-semibold text-sm">
              {formatPrice(mainVariant.oldPrice)}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 mb-3 px-1">
          <span className="bg-yellow-400 px-3 py-1 rounded-lg font-black text-lg">
            {formatPrice(mainVariant.price)}
          </span>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold">
            ⚡ Flash Sale
          </span>
        </div>

        <button
          onClick={handleSelect}
          className="w-full bg-green-500 text-white py-3 rounded-full font-black text-sm hover:bg-green-600 transition shadow-lg"
        >
          SELECT SIZE
        </button>
      </div>

      {/* --- MOBILE VERSION --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={handleSelect}
        className="md:hidden relative flex flex-col bg-white rounded-[2.5rem] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
      >
        {/* Glowing Discount Tag */}
        {discount > 0 && (
          <div className="absolute top-5 left-5 z-20">
            <motion.div 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg"
            >
              {discount}% OFF
            </motion.div>
          </div>
        )}

        <div className="relative bg-[#F8F8F8] rounded-[2rem] overflow-hidden flex items-center justify-center group">
          <motion.img
            src={getProductImage(product.id)}
            alt={product.name}
            className="w-[100%] h-auto z-10 drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 to-transparent pointer-events-none" />
        </div>

        <div className="px-2 pt-4 pb-2">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg leading-tight text-gray-900 w-2/3">
              {product.name}
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-red-500 flex items-center gap-1 uppercase">
                <span className="animate-pulse">●</span> Sale
              </span>
              {mainVariant.oldPrice > 0 && (
                <span className="text-gray-400 line-through text-xs">
                  {formatPrice(mainVariant.oldPrice)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black text-gray-900">
              {formatPrice(mainVariant.price)}
            </span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-md font-bold text-gray-500">
              {mainVariant.name}
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSelect}
            className="w-full relative overflow-hidden bg-gray-900 text-white h-11 rounded-xl font-bold text-xs tracking-wider flex items-center justify-center shadow-md"
          >
            <span className="relative z-10">ORDER NOW — {formatPrice(mainVariant.price)}</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;