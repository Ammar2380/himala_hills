import Product1a from './products (2).jpg';
import Product1b from './products (4).jpg';
import Product1c from './products (1).jpg';

import Product2a from './products (6).jpg';
import Product2b from './products (9).jpg';
import Product2c from './products (5).jpg';

import Product3a from './products (8).jpg';
import Product3b from './products (3).jpg';
import Product3c from './products (7).jpg';

export const PRODUCTS = [
  {
    id: 1,
    name: "Himala Hills – Shilajit Gold",
    description: "Premium refined Himalayan Shilajit resin. Specially crafted for mature adults (40+), athletes, and high-performance individuals.",
    longDescription: "Packed with Fulvic Acid, Humic minerals, amino acids, and antioxidants.",
    images: [Product3a, Product3b, Product3c],
    rating: 4.8,
    reviewsCount: 1240,
    currency: "PKR",
    // Base price for calculations to prevent NaN if your code looks for product.price
    price: 2999, 
    variants: [
      { name: "15g", price: 2999, stock: 45 },
      { name: "30g", price: 5499, stock: 30 },
      { name: "50g", price: 7999, stock: 20 },
    ],
    features: ["Elite Gold Grade Resin", "High Fulvic Acid", "Lab Purified"],
    suggestedUse: "300–500 mg daily in warm water."
  },
  {
    id: 2,
    name: "Himala Hills – Shilajit Plus",
    description: "Enhanced vitality formula for men aged 30+ seeking higher stamina and performance.",
    longDescription: "Supports testosterone balance and energy production.",
    images: [Product2a, Product2b, Product2c],
    rating: 4.9,
    reviewsCount: 850,
    currency: "PKR",
    price: 2499,
    variants: [
      { name: "15g", price: 2499, stock: 55 },
      { name: "30g", price: 4499, stock: 25 },
      { name: "50g", price: 6499, stock: 15 },
    ],
    features: ["Male Vitality", "Boosts Stamina", "Testosterone Support"],
    suggestedUse: "300–500 mg daily."
  },
  // {
  //   id: 3,
  //   name: "Himala Hills – Shilajit Regular",
  //   description: "Balanced daily-use resin for adults aged 25–40 to maintain natural energy.",
  //   longDescription: "Supports daily vitality, mental clarity, and immunity.",
  //   images: [Product1a, Product1b, Product1c],
  //   rating: 4.7,
  //   reviewsCount: 560,
  //   currency: "PKR",
  //   price: 1999,
  //   variants: [
  //     { name: "15g", price: 1999, stock: 80 },
  //     { name: "30g", price: 3499, stock: 40 },
  //     { name: "50g", price: 4999, stock: 25 },
  //   ],
  //   features: ["Daily Energy", "Focus & Productivity", "Immunity Boost"],
  //   suggestedUse: "300–500 mg daily."
  // }
];