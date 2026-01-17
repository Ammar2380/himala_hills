import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "./formatPrice";

const CartDrawer = ({ isOpen, cart, onClose, removeFromCart, onCheckout }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Overlay - Darkens background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
        />

        {/* Drawer Container */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed right-0 top-0 h-full w-full sm:max-w-[400px] bg-white z-[101] shadow-2xl flex flex-col"
        >
          {/* Header - Sticky at top */}
          <div className="p-5 md:p-8 flex justify-between items-center border-b bg-white">
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tighter">YOUR CART</h2>
              <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items Area */}
          <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag size={32} className="text-gray-300" />
                </div>
                <p className="text-gray-500 font-bold">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-sm font-bold underline underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartId} className="group relative flex gap-4 bg-white">
                  {/* Product Image */}
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-sm md:text-base leading-tight text-gray-900 line-clamp-2">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="flex items-end justify-between mt-auto">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {item.variant.size}
                        </p>
                        <p className="text-xs font-medium text-gray-500">
                          Qty: <span className="text-black font-bold">{item.qty}</span>
                        </p>
                      </div>
                      <span className="font-bold text-sm md:text-base">
                        {formatPrice(item.variant.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer - Fixed at bottom */}
          {cart.length > 0 && (
            <div className="p-5  md:p-8 border-t bg-gray-50/80 backdrop-blur-md">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-sm">0.00</span>
                </div>
                <div className="flex justify-between items-center text-lg md:text-xl font-black">
                  <span>Total</span>
                  <span>
                    {formatPrice(
                      cart.reduce((sum, item) => sum + item.variant.price * item.qty, 0)
                    )}
                  </span>
                </div>
              </div>
              
              <button
                onClick={onCheckout}
                className="w-full bg-[#1a3d3d] text-white py-3 md:py-5 rounded-2xl font-bold text-sm md:text-base hover:bg-black transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3"
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

export default CartDrawer;