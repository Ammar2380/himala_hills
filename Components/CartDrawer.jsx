import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, Plus, Minus, Truck } from "lucide-react";
import { formatPrice } from "./formatPrice";

const CartDrawer = ({ isOpen, cart, onClose, removeFromCart, updateQuantity, onCheckout }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.variant.price * item.qty), 0);
  
  /* --- FREE SHIPPING LOGIC COMMENTED OUT FOR NOW ---
  const freeShippingThreshold = 5000; // Example PKR threshold
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  -------------------------------------------------- */

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            // Increased desktop width to 450px for a more premium feel
            className="fixed right-0 top-0 h-full w-full sm:max-w-[450px] bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-5 md:p-8 flex justify-between items-center border-b bg-white">
              <div className="flex items-center gap-3">
                <h2 className="text-xl md:text-2xl font-black tracking-tighter">YOUR CART</h2>
                <span className="bg-gray-950 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold">
                  {cart.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* --- SHIPPING PROGRESS BAR (HIDDEN FOR NOW) --- */}
            {/* {cart.length > 0 && (
              <div className="px-6 md:px-8 py-4 bg-gray-50/50 border-b">
                <div className="flex items-center gap-2 mb-2">
                  <Truck size={14} className={subtotal >= freeShippingThreshold ? "text-green-600" : "text-gray-400"} />
                  <p className="text-[11px] font-bold uppercase tracking-tight">
                    {subtotal >= freeShippingThreshold 
                      ? "Free shipping unlocked!" 
                      : `Add ${formatPrice(freeShippingThreshold - subtotal)} for FREE shipping`}
                  </p>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${shippingProgress}%` }}
                    className={`h-full ${subtotal >= freeShippingThreshold ? 'bg-green-500' : 'bg-black'}`}
                  />
                </div>
              </div>
            )} 
            */}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <ShoppingBag size={40} className="text-gray-100 mb-4" />
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Your cart is empty</p>
                  <button onClick={onClose} className="mt-4 text-sm font-black underline decoration-2 underline-offset-4">START SHOPPING</button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 md:gap-6 bg-white border-b border-gray-50 pb-6">
                    {/* Responsive Image Thumb */}
                    <div className="h-20 w-18 md:h-24 md:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
                      <img src={item.img} alt={item.name} className="h-full w-full object-contain p-2" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h4 className="font-bold text-xs md:text-sm leading-tight text-gray-900">{item.name}</h4>
                          <span className="inline-block text-[9px] md:text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase">{item.variant.name}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.cartId)} className="text-gray-300 hover:text-red-500 transition-colors p-1">
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Desktop-optimized Qty Selector */}
                        <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden">
                          <button onClick={() => updateQuantity(item.cartId, item.qty - 1)} className="p-2 md:px-3 hover:bg-gray-50 disabled:opacity-20" disabled={item.qty <= 1}><Minus size={12} /></button>
                          <span className="text-xs md:text-sm font-black w-6 md:w-8 text-center">{item.qty}</span>
                          <button onClick={() => updateQuantity(item.cartId, item.qty + 1)} className="p-2 md:px-3 hover:bg-gray-50"><Plus size={12} /></button>
                        </div>
                        <span className="font-black text-sm md:text-base text-gray-900">{formatPrice(item.variant.price * item.qty)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 md:p-8 border-t bg-gray-50/50">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-lg md:text-xl font-black text-gray-950 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium">Taxes and shipping calculated at checkout</p>
                </div>
                
                <button 
                  onClick={onCheckout} 
                  className="w-full bg-gray-950 text-white py-4 md:py-5 rounded-2xl text-xs md:text-sm font-black hover:bg-green-500 hover:text-gray-950 transition-all active:scale-[0.98] shadow-xl shadow-black/10 flex items-center justify-center gap-3 uppercase tracking-widest"
                >
                  CHECKOUT NOW
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;