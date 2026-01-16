import React, { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { PRODUCTS } from "./Products.js";

import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductPage from "./ProductPage";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";

const Storefront = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.cartId === item.cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === item.cartId
            ? { ...i, qty: i.qty + item.qty }
            : i
        );
      }
      return [...prev, item];
    });

    setIsCartOpen(true);
  };

  /* ---------------- REMOVE FROM CART ---------------- */
  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  /* ---------------- TOTAL CALCULATION ---------------- */
  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + item.variant.price * item.qty,
        0
      ),
    [cart]
  );

  /* ---------------- ORDER SUCCESS ---------------- */
  const handleOrderSuccess = () => {
    setCart([]);
    setIsCheckingOut(false);
    setIsCartOpen(false);
    setActiveProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#0f172a]">
      {/* NAVBAR */}
      <Navbar
        cartCount={cart.reduce((a, b) => a + b.qty, 0)}
        onCart={() => setIsCartOpen(true)}
        onHome={() => setActiveProduct(null)}
      />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          {/* PRODUCT DETAILS PAGE */}
          {activeProduct ? (
            <ProductPage
              key="product"
              product={activeProduct}
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
          ) : (
            /* PRODUCT GRID */
            <div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
            >
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setActiveProduct}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        removeFromCart={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckingOut(true);
        }}
      />

      {/* CHECKOUT MODAL */}
      <AnimatePresence>
        {isCheckingOut && (
          <CheckoutModal
            total={cartTotal}
            cart={cart}
            onClose={() => setIsCheckingOut(false)}
            onSuccess={handleOrderSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Storefront;
