import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, Plus, Minus, Truck } from "lucide-react";
import { formatPrice } from "./formatPrice";

const CartDrawer = ({ isOpen, cart, onClose, removeFromCart, updateQuantity, onCheckout }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.variant.price * item.qty), 0);
  const freeShippingThreshold = 50;
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

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
            className="fixed right-0 top-0 h-full w-full sm:max-w-[380px] bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header - Smaller Padding on Mobile */}
            <div className="p-4 md:p-6 flex justify-between items-center border-b bg-white">
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-xl font-black tracking-tighter">YOUR CART</h2>
                <span className="bg-black text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                  {cart.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              </div>
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Progress Bar - Condensed */}
            {cart.length > 0 && (
              <div className="px-4 md:px-6 py-3 bg-gray-50/50 border-b">
                <div className="flex items-center gap-2 mb-1.5">
                  <Truck size={12} className={subtotal >= freeShippingThreshold ? "text-green-600" : "text-gray-400"} />
                  <p className="text-[10px] font-bold uppercase tracking-tight">
                    {subtotal >= freeShippingThreshold 
                      ? "Free shipping unlocked!" 
                      : `Add ${formatPrice(freeShippingThreshold - subtotal)} for FREE shipping`}
                  </p>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${shippingProgress}%` }}
                    className={`h-full ${subtotal >= freeShippingThreshold ? 'bg-green-500' : 'bg-black'}`}
                  />
                </div>
              </div>
            )}

            {/* Cart Items - Smaller Images and Text */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <ShoppingBag size={24} className="text-gray-200 mb-2" />
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Empty cart</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="flex gap-3 bg-white border-b border-gray-50 pb-4">
                    {/* Smaller Image Thumb */}
                    <div className="h-16 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                      <img src={item.img} alt={item.name} className="h-full w-full object-contain p-1" />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-[11px] md:text-xs leading-tight mb-0.5">{item.name}</h4>
                          <span className="text-[9px] font-black text-gray-400 uppercase">{item.variant.name}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.cartId)} className="text-gray-300 hover:text-red-500">
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Smaller Qty Selector */}
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                          <button onClick={() => updateQuantity(item.cartId, item.qty - 1)} className="px-2 py-1 hover:bg-gray-50 disabled:opacity-20" disabled={item.qty <= 1}><Minus size={10} /></button>
                          <span className="text-[10px] font-black w-4 text-center">{item.qty}</span>
                          <button onClick={() => updateQuantity(item.cartId, item.qty + 1)} className="px-2 py-1 hover:bg-gray-50"><Plus size={10} /></button>
                        </div>
                        <span className="font-black text-xs">{formatPrice(item.variant.price * item.qty)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer - High Impact but Slim */}
            {cart.length > 0 && (
              <div className="p-4 md:p-6 border-t bg-white">
                <div className="space-y-1.5 mb-4">
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-base font-black border-t pt-2">
                    <span>Total</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                </div>
                <button 
                  onClick={onCheckout} 
                  className="w-full bg-gray-950 text-white py-3.5 rounded-xl text-xs font-black hover:bg-green-500 hover:text-gray-950 transition-all active:scale-[0.97] flex items-center justify-center gap-2"
                >
                  PROCEED TO CHECKOUT
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