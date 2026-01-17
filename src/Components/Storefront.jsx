import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PRODUCTS } from "./Products.js";
import ProductCard from "./ProductCard";
import ProductPage from "./ProductPage";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";

const Storefront = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false); // ✅ Checkout modal state

  // Add to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.cartId === item.cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === item.cartId ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#0f172a]"id="product" >
      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setActiveProduct}
            />
          ))}
        </div>
      </main>

      {/* Full Screen Mobile View Overlay */}
      <AnimatePresence>
        {activeProduct && (
          <ProductPage
            key={activeProduct.id}
            product={activeProduct}
            isCartOpen={isCartOpen}
            onBack={() => setActiveProduct(null)}
            addToCart={(product, variant, quantity) =>
              addToCart({
                cartId: `${product.id}-${variant.size}`,
                id: product.id,
                name: product.name,
                img: product.images[0],
                variant,
                qty: quantity,
              })
            }
          />
        )}
      </AnimatePresence>

  
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        removeFromCart={(id) => setCart(p => p.filter(i => i.cartId !== id))}
        onCheckout={() => {
          setCheckoutOpen(true); // ✅ Open checkout modal
          setIsCartOpen(false);  // close drawer
        }}
      />

     
      {checkoutOpen && (
        <CheckoutModal
          total={cart.reduce((sum, i) => sum + i.variant.price * i.qty, 0)}
          cart={cart}
          onClose={() => setCheckoutOpen(false)}
          onSuccess={() => setCheckoutOpen(false)}
        />
      )}
    </div>
  );
};

export default Storefront;
