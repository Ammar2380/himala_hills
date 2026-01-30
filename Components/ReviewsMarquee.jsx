import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import image1 from './imggg (1).jpg'
import image2 from './imggg (2).jpg'
import image3 from './imggg (3).jpg'
import image4 from './imggg (4).jpg'
import image5 from './imggg (5).jpg'
const reviews = [
  {
    name: "Big Mo",
    date: "September 24, 2024",
    rating: 5,
    content: "Good job, I can feel the effect immediately. Thanks a lot for the quick delivery!",
  },
  {
    name: "Aliza W.",
    date: "May 12, 2025",
    rating: 5,
    content: "I’ve noticed a significant improvement in my energy and focus. Highly recommend!",
  },
  {
    name: "Alex R.",
    date: "July 15, 2025",
    rating: 4,
    content: "The quality of all their products is top-notch. Highly trustworthy and effective!",
  },
  {
    name: "Juraime",
    date: "October 4, 2025",
    rating: 5,
    content: "Flourish completely changed my mom’s energy levels! She’s now more active and feels healthier.",
  },
  {
    name: "Sarah T.",
    date: "October 22, 2025",
    rating: 5,
    content: "Consistency is key, and I'm finally seeing the results after three weeks. Amazing!",
  },
  {
    name: "Omar D.",
    date: "November 14, 2025",
    rating: 4,
    content: "The shipping took a day longer than expected, but the product itself is high quality.",
  },
  {
    name: "Elena G.",
    date: "November 29, 2025",
    rating: 5,
    content: "Perfect addition to my morning routine. I feel much more balanced throughout the day.",
  },
  {
    name: "Marcus K.",
    date: "December 10, 2025",
    rating: 5,
    content: "Exceeded my expectations. The packaging was great and the results are even better.",
  },
  {
    name: "Kevin B.",
    date: "December 18, 2025",
    rating: 5,
    content: "Bought this as a holiday gift for myself. Best decision ever!",
  },
  {
    name: "Nadia S.",
    date: "January 2, 2026",
    rating: 5,
    content: "Starting the new year with a fresh burst of energy. Highly impressed so far.",
  },
  {
    name: "Ahmed R.",
    date: "January 8, 2026",
    rating: 5,
    content: "Product quality is excellent! Delivery in Karachi was super fast.",
  },
  {
    name: "Zainab P.",
    date: "January 24, 2026",
    rating: 5,
    content: "Just started using it last week and I can already feel a difference in my focus levels.",
  }
];


// Helper Component for Stars
const StarRating = ({ rating }) => {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-green-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewsMarquee = () => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const xPos = useRef(0);

  // Desktop Animation Logic (Unchanged)
  useEffect(() => {
    let animationFrameId;
    const speed = 0.6;
    const animate = () => {
      if (!isPaused && window.innerWidth >= 1024) {
        xPos.current -= speed;
        if (marqueeRef.current) {
          if (Math.abs(xPos.current) >= marqueeRef.current.scrollWidth / 2) {
            xPos.current = 0;
          }
          marqueeRef.current.style.transform = `translateX(${xPos.current}px)`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="bg-[#FFF9EE] py-12 lg:py-24 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 mb-10 lg:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#1a3d3d] leading-tight mb-4">
            Trusted by <br className="lg:hidden" /> Thousands
          </h2>
          <div className="flex items-center lg:justify-center gap-3">
            <div className="flex -space-x-2">
  {[image1, image2, image3, image4, image5].map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`user-${i}`}
      className="w-8 h-8 rounded-full border-2 border-[#FFF9EE] object-cover"
    />
  ))}
</div>

            <p className="text-sm md:text-lg text-gray-600 font-medium">
              Join 10,000+ happy customers
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- MOBILE & TABLET VIEW: BENTO-STYLE WATERFALL --- */}
      <div className="flex lg:hidden flex-col gap-4 px-4 overflow-hidden relative max-h-[700px]">
        {/* Top/Bottom Fades for "infinite" vertical scroll effect */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FFF9EE] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF9EE] to-transparent z-20 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-vertical-marquee">
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
            >
              <div className="flex justify-between items-start mb-4">
                <StarRating rating={review.rating} />
                <span className="text-[10px] font-bold text-gray-300 tracking-tighter">VERIFIED</span>
              </div>
              
              <p className="text-[#1a3d3d] font-medium leading-relaxed mb-6">
                "{review.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a3d3d] flex items-center justify-center text-white text-xs font-black">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-[#1a3d3d] text-sm leading-none">{review.name}</p>
                  <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-tighter">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- DESKTOP VIEW: ORIGINAL MARQUEE (UNTOUCHED) --- */}
      <div 
        className="hidden lg:block relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FFF9EE] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FFF9EE] to-transparent z-10" />

        <div
          ref={marqueeRef}
          className="flex gap-8 py-4"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 w-[400px] flex-shrink-0 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 border border-black"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-700 italic leading-relaxed mb-6 h-24 overflow-hidden text-ellipsis">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="w-12 h-12 rounded-full bg-[#1a3d3d] flex items-center justify-center text-white font-bold text-lg">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-black text-[#1a3d3d]">{review.name}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles for the Vertical Scroller (Mobile only) */}
      <style jsx>{`
        @keyframes vertical-marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 35s linear infinite;
        }
        @media (min-width: 1024px) {
          .animate-vertical-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsMarquee;    