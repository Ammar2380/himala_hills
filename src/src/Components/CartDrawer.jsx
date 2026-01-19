import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "./formatPrice";

const CartDrawer = ({ isOpen, cart, onClose, removeFromCart, onCheckout }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
        />

        {/* Drawer */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
        >
          <div className="p-8 flex justify-between items-center border-b">
            <h2 className="text-2xl font-black tracking-tighter">YOUR CART</h2>
            <button onClick={onClose}><X /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto text-gray-200 mb-4" />
                <p className="text-gray-400 font-medium">Your cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover bg-gray-50"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-400 mb-2">{item.variant.size}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">
                        {formatPrice(item.variant.price * item.qty)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-8 border-t space-y-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Subtotal</span>
                <span>
                  {formatPrice(
                    cart.reduce((sum, item) => sum + item.variant.price * item.qty, 0)
                  )}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-[#1a3d3d] text-white py-5 rounded-2xl font-bold hover:bg-black transition-all"
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

export default CartDrawer;
