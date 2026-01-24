import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { formatPrice } from "./formatPrice";
const updateQuantity = (cartId, newQty) => {
  if (newQty < 1) return; // Prevent quantity from going below 1
  
  setCart(prevCart =>
    prevCart.map(item =>
      item.cartId === cartId 
        ? { ...item, qty: newQty } 
        : item
    )
  );
};


const CartDrawer = ({ isOpen, cart, onClose, removeFromCart, updateQuantity, onCheckout }) => (
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
          className="fixed right-0 top-0 h-full w-full sm:max-w-[400px] bg-white z-[101] shadow-2xl flex flex-col"
        >
          <div className="p-5 md:p-8 flex justify-between items-center border-b bg-white">
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tighter">YOUR CART</h2>
              <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            </div>
            <button onClick={onClose} className="p-2 -mr-2 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                <ShoppingBag size={32} className="text-gray-300 mb-4" />
                <p className="text-gray-500 font-bold">Your cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartId} className="group relative flex gap-4 bg-white">
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
                    <img src={item.img} alt={item.name} className="h-full w-full object-contain" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm leading-tight text-gray-900">{item.name}</h4>
                      <button onClick={() => removeFromCart(item.cartId)} className="p-1 text-gray-400 hover:text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="flex items-end justify-between mt-auto">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">{item.variant.size}</p>
                        
                        {/* New Feature: Quantity Selector */}
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.qty - 1)}
                            className="px-2 py-1 hover:bg-gray-100 transition-colors disabled:opacity-20"
                            disabled={item.qty <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-black w-6 text-center">{item.qty}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.qty + 1)}
                            className="px-2 py-1 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      
                      <span className="font-bold text-sm">
                        {formatPrice(item.variant.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-5 md:p-8 border-t bg-gray-50/80">
              <div className="flex justify-between items-center text-lg font-black mb-6">
                <span>Total</span>
                <span>{formatPrice(cart.reduce((sum, item) => sum + (item.variant.price * item.qty), 0))}</span>
              </div>
              <button onClick={onCheckout} className="w-full bg-[#1a3d3d] text-white py-4 rounded-2xl font-bold hover:bg-black transition-all">
                CHECKOUT NOW
              </button>
            </div>
          )}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default CartDrawer;