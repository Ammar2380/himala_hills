const Products = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + qty } : item);
      }
      return [...prev, { ...product, qty }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shippingThreshold = 50;

  return (
    <div className="bg-[#f4dbad] min-h-screen relative overflow-x-hidden">
      {/* Dynamic Header Badge */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-[#1a3d3d] text-white p-3 sm:p-4 rounded-full shadow-2xl relative hover:scale-110 transition-transform"
        >
          <ShoppingBag size={20} className="sm:w-6 sm:h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border-2 border-[#f4dbad]">
              {cart.reduce((a, b) => a + b.qty, 0)}
            </span>
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!activeProduct ? (
          <motion.section 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 sm:py-20 px-4"
          >
            <motion.h2 className="text-3xl sm:text-4xl font-black text-center mb-10 sm:mb-16 text-[#1a3d3d] tracking-tighter">
                OUR HIMALAYAN RANGE
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
              {products.map((p, i) => (
                <motion.div
                  key={p.id}
                  layoutId={`card-${p.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveProduct(p)}
                  className="bg-white rounded-[2rem] shadow-xl p-5 sm:p-6 cursor-pointer relative group border border-white/20"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#1a3d3d] text-white text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {p.discount}
                    </span>
                  </div>

                  <motion.div layoutId={`img-${p.id}`} className="h-44 sm:h-56 flex items-center justify-center mb-4 sm:mb-6">
                    <img src={p.img} alt={p.name} className="h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </motion.div>

                  <h3 className="text-[#1a3d3d] font-bold text-base sm:text-lg mb-2 line-clamp-2 leading-tight">{p.name}</h3>
                  
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <span className="text-xl sm:text-2xl font-black text-[#1a3d3d]">£{p.price}</span>
                    <span className="text-xs sm:text-sm text-gray-400 line-through">{p.oldPrice}</span>
                  </div>

                  <button className="w-full bg-[#1a3d3d] text-white font-bold py-3 rounded-2xl text-sm sm:text-base">
                    VIEW DETAILS
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ) : (
          <ProductPage 
            key="detail"
            product={activeProduct} 
            onBack={() => setActiveProduct(null)} 
            addToCart={addToCart}
          />
        )}
      </AnimatePresence>

      {/* CART DRAWER: Responsive width */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]" />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-[85%] sm:w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-5 sm:p-6 border-b flex justify-between items-center bg-[#1a3d3d] text-white">
                <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2"><ShoppingCart size={18}/> Basket</h2>
                <button onClick={() => setIsCartOpen(false)}><X size={24}/></button>
              </div>

              <div className="p-4 bg-gray-50 border-b">
                <p className="text-[10px] font-bold mb-2 uppercase tracking-tighter text-center sm:text-left">
                  {subtotal >= shippingThreshold ? "✅ FREE SHIPPING UNLOCKED" : `SPEND £${(shippingThreshold - subtotal).toFixed(2)} MORE FOR FREE SHIPPING`}
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div animate={{ width: `${Math.min(100, (subtotal/shippingThreshold)*100)}%` }} className="h-full bg-green-500" />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                    <ShoppingCart size={48} className="mb-4"/>
                    <p className="text-sm">Your basket is empty</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-3 sm:gap-4 items-center">
                      <img src={item.img} className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-lg object-contain" />
                      <div className="flex-1">
                        <h4 className="text-[13px] sm:text-sm font-bold leading-tight line-clamp-1">{item.name}</h4>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border rounded-lg scale-90 sm:scale-100">
                            <button onClick={() => updateCartQty(item.id, -1)} className="px-2 py-1"><Minus size={12}/></button>
                            <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                            <button onClick={() => updateCartQty(item.id, 1)} className="px-2 py-1"><Plus size={12}/></button>
                          </div>
                          <span className="text-sm font-bold text-[#1a3d3d]">£{(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500"><Trash2 size={16}/></button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-5 sm:p-6 bg-gray-50 border-t">
                  <div className="flex justify-between items-end mb-4 sm:mb-6">
                    <span className="text-gray-400 font-bold text-xs">TOTAL</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#1a3d3d]">£{subtotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#c5a059] text-white py-4 rounded-2xl font-black text-sm sm:text-lg shadow-xl">
                    CHECKOUT
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;