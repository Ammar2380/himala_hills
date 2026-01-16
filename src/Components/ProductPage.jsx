import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import VariantSelector from './VariantSelector';
import Rating from './Rating';
import { formatPrice } from './formatPrice';

const ProductPage = ({ product, onBack, addToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pb-24 lg:pb-0" // Space for sticky mobile bar
    >
      <div className="max-w-[1440px] mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:p-12">
        
        {/* --- MOBILE/TABLET HEADER & CAROUSEL --- */}
        <div className="relative lg:static lg:block">
          {/* Floating Back Button (Mobile Only) */}
          <button
            onClick={onBack}
            className="absolute top-4 left-4 z-20 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg lg:hidden"
          >
            <ArrowLeft size={20} className="text-black" />
          </button>

          {/* Desktop Back Button (Preserved) */}
          <button
            onClick={onBack}
            className="hidden lg:flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back
          </button>

          {/* Main Image Container */}
          <div className="relative aspect-[4/5] sm:aspect-square lg:rounded-3xl overflow-hidden bg-gray-50 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={product.images[currentImage]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows (Visible on Hover/Desktop) */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
              <button onClick={prevImage} className="p-2 bg-white/90 rounded-full shadow-xl hover:scale-110 transition-transform">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="p-2 bg-white/90 rounded-full shadow-xl hover:scale-110 transition-transform">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Visual Pagination Indicators (Mobile) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
              {product.images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-300 rounded-full ${i === currentImage ? 'w-8 bg-black' : 'w-2 bg-black/20'}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- PRODUCT INFO SECTION --- */}
        <div className="px-6 py-8 lg:p-0 flex flex-col">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-start">
              <Rating value={product.rating} count={product.reviewsCount} />
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded uppercase tracking-tighter">In Stock</span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              {product.description}
            </p>

            {/* Variant Selection */}
            <div className="py-4 border-y border-gray-50">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                Configure Selection
              </p>
              <VariantSelector
                variants={product.variants}
                selected={selectedVariant}
                onSelect={setSelectedVariant}
              />
            </div>

            {/* Desktop-Only Price & Qty (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-8 pt-4">
              <div className="flex items-center border-2 border-gray-100 rounded-2xl p-1.5">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center text-lg font-black">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
                  <Plus size={20} />
                </button>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-400 line-through font-bold">{formatPrice(selectedVariant.oldPrice)}</span>
                <span className="text-3xl font-black">{formatPrice(selectedVariant.price * quantity)}</span>
              </div>
            </div>

            {/* Desktop-Only Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="hidden lg:flex w-full bg-black text-white py-5 rounded-2xl font-black text-sm items-center justify-center gap-3 shadow-2xl hover:bg-gray-900 transition-colors"
            >
              <ShoppingCart size={20} /> ADD TO BASKET
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* --- MOBILE STICKY BOTTOM BAR --- */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 p-4 px-6 flex items-center justify-between z-50 lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Price</span>
          <span className="text-xl font-black">{formatPrice(selectedVariant.price * quantity)}</span>
        </div>

        <div className="flex items-center gap-3">
            {/* Minimal Qty Selector for Mobile */}
            <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-1"><Minus size={14}/></button>
                <span className="px-2 font-bold text-sm">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-1"><Plus size={14}/></button>
            </div>
            
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(product, selectedVariant, quantity)}
                className="bg-[#c5a059] text-white h-12 px-6 rounded-full font-black text-xs flex items-center gap-2 shadow-lg shadow-[#c5a059]/30"
            >
                <ShoppingCart size={16} /> ADD
            </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;