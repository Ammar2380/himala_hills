import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowLeft as ChevronLeft, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Zap, 
  ShieldCheck, 
  Truck, 
  Star, 
  Box,      // Add this
  Maximize  // Add this
} from 'lucide-react';
import Rating from './Rating';
const ProductPage = ({ product, onBack, addToCart }) => {
  // 2. This state controls which gram is active
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // 3. This updates automatically when selectedVariant changes
  const discount = selectedVariant.oldPrice 
    ? Math.round(((selectedVariant.oldPrice - selectedVariant.price) / selectedVariant.oldPrice) * 100) 
    : 0;
const formatPrice = (amt) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amt);



  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex justify-center items-end md:items-center p-0 md:p-6"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 250 }}
        className="w-full h-[98vh] md:h-[90vh] md:max-w-6xl bg-white rounded-t-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
      >
        
        {/* --- LEFT: IMAGE SECTION --- */}
        <div className="relative w-full h-[40vh] md:h-full md:w-[55%] bg-white flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0">
          <button 
            onClick={onBack} 
            className="absolute top-6 left-6 z-[130] w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-lg active:scale-90 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-[125] flex justify-between pointer-events-none">
            <button onClick={prevImage} className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md transition-all active:scale-90">
              <ChevronLeft size={24} className="text-gray-900" />
            </button>
            <button onClick={nextImage} className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md transition-all active:scale-90">
              <ArrowRight size={24} className="text-gray-900" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              src={product.images[currentImage]}
              className="w-full h-full object-contain p-8 md:p-12"
            />
          </AnimatePresence>

          <div className="absolute bottom-6 flex gap-2">
            {product.images.map((_, i) => (
              <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${currentImage === i ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'}`} />
            ))}
          </div>
        </div>

        {/* --- RIGHT: CONTENT & DOCK WRAPPER --- */}
        <div className="w-full md:w-[45%] h-[58vh] md:h-full flex flex-col bg-white">
          
         {/* Scrollable Area */}
<div className="flex-1 overflow-y-auto px-6 md:px-8 pt-8 pb-4">
  <div className="space-y-6">
    
    {/* Header Info */}
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Rating value={product.rating} count={product.reviewsCount} />
        <span className="bg-red-50 text-red-600 text-[10px] font-black px-2 py-1 rounded flex items-center gap-1 uppercase tracking-widest">
          <Zap size={10} fill="currentColor" /> Flash Sale
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
        {product.name}
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-3xl font-black text-gray-900">{formatPrice(selectedVariant.price)}</span>
        {selectedVariant.oldPrice > 0 && (
          <div className="flex flex-col">
            <span className="text-base text-gray-400 line-through leading-none">{formatPrice(selectedVariant.oldPrice)}</span>
            <span className="text-green-600 font-bold text-[10px] uppercase mt-1">Save {discount}% Today</span>
          </div>
        )}
      </div>
    </div>

    {/* --- NEW: GRAMS SELECTOR --- */}
    <div className="space-y-3">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Select Supply Weight</h3>
      <div className="grid grid-cols-3 gap-2">
        {["15g", "30g", "50g"].map((gram) => (
          <button
            key={gram}
            onClick={() => {
              const variant = product.variants.find(v => v.name === gram);
              if (variant) setSelectedVariant(variant);
            }}
            className={`relative py-4 rounded-2xl font-bold transition-all border-2 flex flex-col items-center 
              ${selectedVariant.name === gram 
                ? 'border-gray-950 bg-gray-950 text-white shadow-lg shadow-black/20' 
                : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}
          >
            <span className="text-sm">{gram}</span>
            <span className={`text-[8px] uppercase tracking-tighter opacity-60`}>
              {gram === "50g" ? "Best Value" : gram === "30g" ? "Most Popular" : "Starter"}
            </span>
          </button>
        ))}
      </div>
    </div>

    {/* --- NEW: PACKAGING DIMENSIONS --- */}
    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-gray-400">
          <Box size={14} />
          <span className="text-[9px] font-black uppercase tracking-widest">Drop Box</span>
        </div>
        <p className="text-xs font-bold text-gray-700">Round 19cm • H 15cm</p>
      </div>
      <div className="space-y-1 border-l border-gray-200 pl-4">
        <div className="flex items-center gap-2 text-gray-400">
          <Maximize size={14} />
          <span className="text-[9px] font-black uppercase tracking-widest">Main Box</span>
        </div>
        <p className="text-xs font-bold text-gray-700">Round 26cm • H 11cm</p>
      </div>
    </div>

    {/* Promo Box */}
    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
      <h3 className="text-amber-800 font-bold text-xs flex items-center gap-2 mb-1 uppercase tracking-wider">
        <Star size={12} fill="currentColor" /> Transformation Deal
      </h3>
      <p className="text-amber-700/80 text-xs leading-relaxed">
        Order in the next 2 hours to secure your <strong>{discount}% discount</strong> and priority shipping.
      </p>
    </div>

    {/* Description */}
    <div className="space-y-4">
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">{product.description}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
          <Truck size={16} className="text-green-600" /> Free Shipping
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
          <ShieldCheck size={16} className="text-green-600" /> Lab Certified
        </div>
      </div>
    </div>

    {/* Urgency */}
    <div className="flex items-center gap-2 text-red-600 py-3 border-y border-gray-50">
      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-widest">Only 7 units left at this price</span>
    </div>
  </div>
</div>
          {/* --- FIXED BOTTOM DOCK (ALWAYS DOWN) --- */}
         <div className="p-3 md:p-8 bg-white border-t border-gray-100 flex-shrink-0">
  <div className="bg-gray-950 rounded-[1.5rem] md:rounded-3xl p-1.5 flex items-center justify-between shadow-xl">
    
    {/* Compact Quantity Selector */}
    <div className="flex items-center bg-white/10 rounded-[1.2rem] p-0.5 md:p-1 ml-0.5">
      <button 
        onClick={() => setQuantity(Math.max(1, quantity - 1))} 
        className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center text-white hover:bg-white/20 rounded-lg md:rounded-xl transition active:scale-90"
      >
        <Minus size={14} className="md:size-4" />
      </button>
      
      <span className="text-white font-bold w-6 md:w-10 text-center text-xs md:text-base">
        {quantity}
      </span>
      
      <button 
        onClick={() => setQuantity(quantity + 1)} 
        className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center text-white hover:bg-white/20 rounded-lg md:rounded-xl transition active:scale-90"
      >
        <Plus size={14} className="md:size-4" />
      </button>
    </div>

    {/* Small Responsive Button */}
    <button
      onClick={handleAddToCart}
      className="bg-green-500 hover:bg-green-400 text-gray-950 h-10 md:h-14 px-4 md:px-10 rounded-[1.2rem] md:rounded-3xl font-black transition-all active:scale-95 shadow-lg shadow-green-500/10 flex items-center gap-2"
    >
      <ShoppingCart size={14} className="md:size-[18px]" />
      <span className="uppercase text-[10px] md:text-sm tracking-tight whitespace-nowrap">
        Add <span className="hidden xs:inline">to Cart</span> — {formatPrice(selectedVariant.price * quantity)}
      </span>
    </button>

  </div>
</div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;