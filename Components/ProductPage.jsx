import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Share2, Minus, Plus } from 'lucide-react';
import { formatPrice } from './formatPrice';
import Rating from './Rating';
import VariantSelector from './VariantSelector';
import CheckoutModal from './CheckoutModal';

const ProductPage = ({ product, onBack, addToCart }) => {
  // 1. FIXED: Initialize with the first variant's image if available
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const scrollRef = useRef(null);

  // 2. FIXED: Update current image when variant changes
  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
  };

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    // setCheckoutOpen(true); // OPEN MODAL
  };

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100]  bg-black/40 backdrop-blur-sm flex justify-center items-end md:items-center"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 250 }}
        className="w-full h-[98vh] md:h-[90vh]  md:max-w-5xl bg-[#fafafa] rounded-t-[2.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
      >
      
        <div className="absolute top-0 left-0 right-0 z-[120] flex items-center justify-between p-4 pointer-events-none">
          <button 
            onClick={onBack} 
            className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md active:scale-90 transition-transform"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {/* --- HUGE IMAGE SECTION --- */}
        <div className="relative w-full h-[70vh] md:h-full md:w-3/5 bg-[#ffffff] flex items-center justify-center overflow-hidden">
          <motion.div 
            className="w-full h-full  flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={product.images[currentImage]}
                className="w-full h-full object-contain bg-[#ffffff] "
              />
            </AnimatePresence>
          </motion.div>

          <button
            onClick={() => setCurrentImage((i) => Math.max(0, i - 1))}
            disabled={currentImage === 0}
            className="absolute left-3 w-9 h-9 rounded-full bg-[#ffffff] flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={() =>
              setCurrentImage((i) =>
                Math.min(product.images.length - 1, i + 1)
              )
            }
            disabled={currentImage === product.images.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white backdrop-blur flex items-center justify-center shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition"
          >
            ›
          </button>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div 
          ref={scrollRef}
          className="w-full md:w-2/5 h-full overflow-y-auto bg-white flex flex-col relative"
        >
          <div className="px-6 pt-8 pb-32 space-y-6">
            <div>
              <Rating value={product.rating} count={product.reviewsCount} />
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
              <p className="text-gray-500 mt-4 leading-relaxed">{product.description}</p>
            </div>

            {/* <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Select Variant</h3>
              <VariantSelector 
                variants={product.variants} 
                selected={selectedVariant} 
                onSelect={handleVariantSelect} 
              />
            </div> */}
          </div>

          {/* --- COMPACT DOCK --- */}
          <div className="fixed md:absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
            <div className="bg-gray-900 rounded-full p-1.5 pl-6 flex items-center justify-between shadow-xl">
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">{formatPrice(selectedVariant.price * quantity)}</span>
              </div>

             <div className="flex items-center gap-2 md:gap-4">
  {/* Quantity Controls - Made more compact on mobile */}
  <div className="flex items-center bg-gray-800 rounded-full p-1 md:px-2 md:py-1">
    <button 
      onClick={() => setQuantity(Math.max(1, quantity - 1))}
      className="text-white p-1 hover:bg-gray-700 rounded-full transition"
    >
      <Minus size={12} className="md:w-[14px]" />
    </button>
    <span className="text-white text-xs md:text-sm font-bold w-5 md:w-6 text-center">
      {quantity}
    </span>
    <button 
      onClick={() => setQuantity(quantity + 1)}
      className="text-white p-1 hover:bg-gray-700 rounded-full transition"
    >
      <Plus size={12} className="md:w-[14px]" />
    </button>
  </div>

  <button
    onClick={handleAddToCart}
    className="bg-white text-black h-9 md:h-10 px-3 md:px-6 rounded-full font-bold text-[10px] md:text-xs flex items-center gap-1.5 md:gap-2 active:scale-95 transition-transform whitespace-nowrap"
  >
    <ShoppingCart size={13} className="md:w-[14px]" />
    <span className="hidden xs:inline">ADD TO CART</span>
    <span className="xs:hidden uppercase font-bold">ADD to cart</span>
  </button>
</div>
            </div>
          </div>

          {/* --- ADD CHECKOUT MODAL HERE --- */}
          {checkoutOpen && (
            <CheckoutModal
              total={selectedVariant.price * quantity}
              cart={[{ product, variant: selectedVariant, qty: quantity }]}
              onClose={() => setCheckoutOpen(false)}
              onSuccess={() => setCheckoutOpen(false)}
            />
          )}
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default ProductPage;