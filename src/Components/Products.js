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
    description:
      "Premium refined Himalayan Shilajit resin sourced from the high-altitude rocks of Gilgit–Baltistan and purified through traditional slow filtration. Specially crafted for mature adults (40+), athletes, and high-performance individuals seeking maximum strength, recovery, and youthful vitality.",
    longDescription:
      "Packed with Fulvic Acid, Humic minerals, amino acids, and antioxidants, Shilajit Gold helps fight fatigue, enhance cellular energy, support testosterone balance, and promote long-term vitality and longevity.",
    
    images: [Product3a, Product3b, Product3c],
    rating: 4.8,
    reviewsCount: 1240,
    variants: [
      { size: "15 Grams", price: 29.99, oldPrice: 39.99, stock: 15 },
      { size: "30 Grams", price: 49.99, oldPrice: 59.99, stock: 5 },
      { size: "50 Grams", price: 74.99, oldPrice: 89.99, stock: 0 },
    ],
    features: [
      "Elite Gold Grade Resin",
      "High Fulvic Acid Content",
      "Supports Strength & Recovery",
      "Anti-Fatigue & Longevity Support",
      "Lab Purified & Certified",
    ],
    suggestedUse:
      "Dissolve a pea-sized portion (300–500 mg) in warm water, milk, or green tea once or twice daily."
  },

  {
    id: 2,
    name: "Himala Hills – Shilajit Plus",
    description:
      "An enhanced vitality and male wellness formula designed for men aged 30+ who seek higher stamina, confidence, and physical performance. Sourced from pure Himalayan rocks of Gilgit–Baltistan.",
    longDescription:
      "Enriched with Fulvic minerals, trace elements, and bioactive compounds, Shilajit Plus naturally supports testosterone balance, energy production, stress reduction, and reproductive wellness.",
    images: [Product2a, Product2b, Product2c],
    rating: 4.9,
    reviewsCount: 850,
    variants: [
      { size: "30 ML", price: 29.99, oldPrice: 49.99, stock: 42 },
      { size: "60 ML", price: 54.99, oldPrice: 79.99, stock: 12 },
    ],
    features: [
      "Male Vitality Formula",
      "Boosts Stamina & Endurance",
      "Supports Healthy Testosterone",
      "Stress & Fatigue Reduction",
      "Fast Absorbing Resin Extract",
    ],
    suggestedUse:
      "Take a pea-sized portion (300–500 mg) once or twice daily dissolved in warm water or milk."
  },

  {
    id: 3,
    name: "Himala Hills – Shilajit Regular",
    description:
      "A balanced daily-use Himalayan Shilajit resin sun-dried at high altitudes in Gilgit–Baltistan. Ideal for adults aged 25–40 to maintain natural energy, focus, and stamina.",
    longDescription:
      "Rich in Fulvic and Humic minerals, antioxidants, and trace elements, Shilajit Regular supports daily vitality, mental clarity, immunity, and nutrient absorption—without caffeine or stimulants.",
   images: [Product1a, Product1b, Product1c],
    rating: 4.7,
    reviewsCount: 560,
    variants: [
      { size: "20 Grams", price: 34.99, oldPrice: 44.99, stock: 25 },
      { size: "40 Grams", price: 59.99, oldPrice: 74.99, stock: 10 },
      { size: "60 Grams", price: 79.99, oldPrice: 99.99, stock: 0 },
    ],
    features: [
      "Daily Vitality Support",
      "Improves Focus & Productivity",
      "Boosts Natural Energy",
      "Supports Immunity",
      "Pure Himalayan Source",
    ],
    suggestedUse:
      "Dissolve 300–500 mg in warm water, milk, or tea once or twice daily."
  }
];
