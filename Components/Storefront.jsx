import React, { useState, useEffect } from "react";
import { PRODUCTS } from "./Products";
import ProductPage from "./ProductPage";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";
import Navbar from "./Navbar";

const Storefront = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // The single product
  const product = PRODUCTS[0];

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

      <main className="pt-20 md:pt-24" id="product">
        <ProductPage
          product={product}
          addToCart={(product, variant, quantity) =>
            addToCart({
              cartId: `${product.id}-${variant.name}`,
              id: product.id,
              name: product.name,
              img: product.images[0],
              variant,
              qty: quantity,
            })
          }
        />
      </main>

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
            setCart([]);
            setCheckoutOpen(false);
          }}
        />
      )}

    </div>
  );
};

export default Storefront;