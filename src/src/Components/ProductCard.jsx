import { motion } from "framer-motion";
import Rating from "./Rating";

// Your specific PNG imports
import Product1 from "./Frame 7.png";
import Product2 from "./Frame 8.png";
import Product3 from "./Frame 9.png";

const formatPrice = (amt) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amt);

const ProductCard = ({ product, onSelect }) => {
  const mainVariant = product.variants?.[0] || { price: 0, oldPrice: 0, size: 'N/A' };

  const getProductImage = (id) => {
    switch (id) {
      case 1: return Product3;
      case 2: return Product1;
      case 3: return Product2;
      default: return Product1;
    }
  };

  const discount = Math.round(((mainVariant.oldPrice - mainVariant.price) / mainVariant.oldPrice) * 100);

  return (
    <>
      {/* --- DESKTOP VERSION (UNTOUCHED) --- */}
      <div
        onClick={() => onSelect(product)}
        className="hidden md:block cursor-pointer bg-[#f9efd9] rounded-[2rem] p-4 transition-transform hover:-translate-y-1"
      >
        <div className="relative bg-white rounded-[1.75rem] overflow-hidden mb-4">
          <span className="absolute top-4 left-4 z-10 bg-white px-4 py-1 rounded-full text-xs font-bold shadow">
            Limited time Discount
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
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {discount}% OFF
          </span>
        </div>
        <div className="flex items-center gap-3 mb-3 px-1">
          <span className="bg-yellow-400 px-3 py-1 rounded-lg font-black text-lg">
            {formatPrice(mainVariant.price)}
          </span>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ⚡ Flash Sale
          </span>
        </div>
        <div className="border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm font-bold mb-4">
          {mainVariant.size} — {formatPrice(mainVariant.price)}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(product); }}
          className="w-full bg-green-500 text-white py-3 rounded-full font-black text-sm hover:bg-green-600 transition shadow-lg"
        >
          ADD TO CART
        </button>
      </div>

      {/* --- MOBILE VERSION (MIND-BLOWING CREATIVE) --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => onSelect(product)}
        className="md:hidden relative flex flex-col bg-white rounded-[2.5rem] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
      >
        {/* Glowing Discount Tag */}
        <div className="absolute top-5 left-5 z-20">
          <motion.div 
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg"
          >
            {discount}% OFF
          </motion.div>
        </div>

        {/* Product Image Stage */}
        <div className="relative bg-[#F8F8F8] rounded-[2rem]  overflow-hidden flex items-center justify-center group ">
          <motion.img
          
            src={getProductImage(product.id)}
            alt={product.name}
            className="w-[100%] h-auto z-10 drop-shadow-2xl"
          />
          {/* Decorative radial glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Area */}
        <div className="px-2 pt-4 pb-2">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg leading-tight text-gray-900 w-2/3">
              {product.name}
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-red-500 flex items-center gap-1 uppercase">
                <span className="animate-pulse">●</span> Flash Sale
              </span>
              <span className="text-gray-400 line-through text-xs">
                {formatPrice(mainVariant.oldPrice)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black text-gray-900">
              {formatPrice(mainVariant.price)}
            </span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-md font-bold text-gray-500">
              {mainVariant.size}
            </span>
          </div>

          {/* Haptic-Style Action Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={(e) => { e.stopPropagation(); onSelect(product); }}
            className="w-full relative overflow-hidden bg-gray-900 text-white h-14 rounded-2xl font-black text-sm tracking-widest flex items-center justify-center shadow-xl group"
          >
            <span className="relative z-10">ADD TO CART — {formatPrice(mainVariant.price)}</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;