import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { PRODUCTS } from "./Products";
import ProductCard from "./ProductCard";
import ProductPage from "./ProductPage";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";
import Navbar from "./Navbar"; 

const Storefront = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Lock scroll when cart is open
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "unset";
  }, [isCartOpen]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.cartId === item.cartId);
      if (existing) {
        return prev.map(i =>
          i.cartId === item.cartId ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId, newQty) => {
    if (newQty < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, qty: newQty } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] selection:bg-yellow-200">
     
      <Navbar cart={cart} onCartOpen={() => setIsCartOpen(true)} showMarquee={false} />


      <main className="max-w-7xl mx-auto px-6 py-12 pt-24 md:pt-32" id="product">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setActiveProduct}
            />
          ))}
        </div>
      </main>

      <AnimatePresence>
        {activeProduct && (
          <ProductPage
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
        removeFromCart={(id) =>
          setCart(prev => prev.filter(item => item.cartId !== id))
        }
        updateQuantity={updateQuantity}
        onCheckout={() => {
          setCheckoutOpen(true);
          setIsCartOpen(false);
        }}
      />

    {checkoutOpen && (
  <CheckoutModal
    cart={cart}
    total={cart.reduce((sum, i) => sum + i.variant.price * i.qty, 0)}
    onClose={() => setCheckoutOpen(false)}
    onSuccess={() => {
      setCart([]);           // Clear the cart
      setCheckoutOpen(false); // Close the modal
    }}
  />
)}

    </div>
  );
};

export default Storefront;