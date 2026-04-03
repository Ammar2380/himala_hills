import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Minus,
  Plus,
  Zap,
  ShieldCheck,
  Truck,
  Star,
  Box,
  Maximize,
  Check
} from 'lucide-react';
import Rating from './Rating';
import sticker1 from './sticker1.webp';
import sticker2 from './sticker2.webp';
import sticker4 from './ECO_FRIENDLY.webp';
import sticker5 from './EUROFINS_LABTESTED.webp';
import sticker6 from './THIRD_PARTY.webp';
import sticker7 from './ISO22000.webp';
import sticker8 from './GMP.webp';

const formatPrice = (amt) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
  }).format(amt);

const ProductPage = ({ product, addToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const discount = selectedVariant.oldPrice
    ? Math.round(((selectedVariant.oldPrice - selectedVariant.price) / selectedVariant.oldPrice) * 100)
    : 0;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">

      {/* ── STICKY TOP BAR (mobile) ── */}
      <div className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-black uppercase tracking-widest text-gray-900">{product.name}</span>
        <span className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1">
          <Zap size={9} fill="white" /> Flash Sale
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* ── LEFT: IMAGE GALLERY ── */}
          <div className="md:sticky md:top-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.07)] aspect-square flex items-center justify-center"
            >
              {/* Discount badge */}
              <div className="absolute top-5 left-5 z-20 flex flex-col gap-2">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="bg-gray-900 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg"
                >
                  {discount}% OFF
                </motion.div>
                <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1">
                  <Zap size={9} fill="white" /> Flash Sale
                </span>
              </div>

              {/* Nav arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-white transition active:scale-90"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-white transition active:scale-90"
                  >
                    <ArrowRight size={18} />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[currentImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-10"
                />
              </AnimatePresence>

              {/* Dots */}
              {product.images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentImage === i ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4 justify-center">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all ${currentImage === i ? 'border-gray-900 shadow-md' : 'border-transparent opacity-50 hover:opacity-80'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain bg-white p-1" />
                  </button>
                ))}
              </div>
            )}

            {/* Certification badges — desktop only */}
            <div className="hidden md:block mt-6 bg-white rounded-2xl p-4 border border-gray-100">
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3 text-center">Quality Assurance & Certifications</p>
              <div className="grid grid-cols-5 gap-2 items-center justify-items-center">
                {[sticker4, sticker5, sticker6, sticker7, sticker8].map((s, i) => (
                  <img key={i} src={s} alt="cert" className="w-14 h-14 object-contain opacity-80" />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: PRODUCT DETAILS ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-7"
          >

            {/* Title + rating */}
            <div className="space-y-3">
              <Rating value={product.rating} count={product.reviewsCount} />
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-end gap-4">
                <span className="text-4xl font-black text-gray-900">{formatPrice(selectedVariant.price)}</span>
                {selectedVariant.oldPrice > 0 && (
                  <div className="flex flex-col pb-1">
                    <span className="text-base text-gray-400 line-through leading-none">{formatPrice(selectedVariant.oldPrice)}</span>
                    <span className="text-green-600 font-bold text-[10px] uppercase mt-0.5">Save {discount}% Today</span>
                  </div>
                )}
              </div>
            </div>

            {/* Variant selector */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Select Supply Weight</h3>
              <div className="grid grid-cols-3 gap-3">
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
                        : 'border-gray-100 bg-white text-gray-500 hover:border-gray-300'}`}
                  >
                    <span className="text-sm">{gram}</span>
                    <span className="text-[8px] uppercase tracking-tighter opacity-60">
                      {gram === "50g" ? "Best Value" : gram === "30g" ? "Most Popular" : "Starter"}
                    </span>
                    {selectedVariant.name === gram && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check size={10} color="white" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Flash sale urgency */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <h3 className="text-amber-800 font-bold text-xs flex items-center gap-2 mb-1 uppercase tracking-wider">
                <Star size={12} fill="currentColor" /> Transformation Deal
              </h3>
              <p className="text-amber-700/80 text-xs leading-relaxed">
                Order in the next 2 hours to secure your <strong>{discount}% discount</strong> and priority shipping.
              </p>
            </div>

            {/* Box dimensions */}
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

            {/* Description */}
            <div>
              <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tight text-gray-700 bg-white px-3 py-2.5 rounded-xl border border-gray-100 shadow-sm">
                <Truck size={14} className="text-green-600 shrink-0" /> Free Shipping
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tight text-gray-700 bg-white px-3 py-2.5 rounded-xl border border-gray-100 shadow-sm">
                <ShieldCheck size={14} className="text-green-600 shrink-0" /> Lab Certified
              </div>
            </div>

            {/* Seal stickers */}
            <div className="flex gap-6 items-center">
              <motion.img initial={{ rotate: -12, y: -4 }} animate={{ rotate: -12, y: -4 }} whileHover={{ rotate: 0, scale: 1.1 }} src={sticker1} alt="Seal 1" className="w-16 h-16 object-contain drop-shadow-md" />
              <motion.img initial={{ rotate: 8, y: 4 }} animate={{ rotate: 8, y: 4 }} whileHover={{ rotate: 0, scale: 1.1 }} src={sticker2} alt="Seal 2" className="w-16 h-16 object-contain drop-shadow-md" />
            </div>

            {/* How to use */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">How to Use</h4>
              <div className="bg-green-50/50 p-4 rounded-2xl border border-green-100/60">
                <p className="text-xs font-medium text-gray-600 leading-relaxed">{product.suggestedUse}</p>
              </div>
            </div>

            {/* Certifications — mobile only */}
            <div className="md:hidden bg-white rounded-2xl p-4 border border-gray-100">
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3 text-center">Quality Assurance & Certifications</p>
              <div className="grid grid-cols-5 gap-2 items-center justify-items-center">
                {[sticker4, sticker5, sticker6, sticker7, sticker8].map((s, i) => (
                  <img key={i} src={s} alt="cert" className="w-12 h-12 object-contain opacity-80" />
                ))}
              </div>
            </div>

            {/* ── ADD TO CART DOCK ── */}
         <div className="sticky bottom-4 z-40 mt-2">
              <div className="bg-gray-950 rounded-[1.75rem] p-1.5 flex items-center justify-between gap-2 shadow-2xl shadow-black/30">
                
                {/* Qty */}
                <div className="flex items-center bg-white/10 rounded-[1.3rem] p-0.5 ml-0.5 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-xl transition active:scale-90"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="text-white font-bold w-6 md:w-8 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-xl transition active:scale-90"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 min-w-0 h-11 md:h-12 px-3 md:px-8 rounded-[1.3rem] font-black transition-all flex items-center justify-center gap-2 shadow-lg text-[11px] md:text-sm tracking-tight uppercase
                    ${added ? 'bg-green-400 text-gray-900' : 'bg-green-500 hover:bg-green-400 text-gray-950'}`}
                >
                  {added ? <Check size={15} strokeWidth={3} className="shrink-0" /> : <ShoppingCart size={14} className="shrink-0" />}
                  <span className="truncate">
                    {added ? 'Added!' : `Add to Cart — ${formatPrice(selectedVariant.price * quantity)}`}
                  </span>
                </motion.button>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;