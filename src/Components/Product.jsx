// components/Products.jsx
import p1 from "./Scene-4 g 1.png";
import p2 from "./Scene-4 g 1 (1).png";
import p3 from "./Frame 7.png";

const products = [
  { name: "Gold Shilajit", img: p1 },
  { name: "Shilajit Plus+", img: p2 },
  { name: "Shilajit", img: p3 },
];

const Products = () => {
  return (
    <section  className="bg-[#FFF9EE] py-20" id="product">
      <h2 className="text-3xl font-bold text-center mb-12">
        OUR PRODUCTS
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-9 px-4 md:px-0">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-[#262222] w-full max-w-xs md:w-70 rounded-2xl shadow-lg p-5 text-start"
          >
            <img
              src={p.img}
              alt={p.name}
              className="mx-auto h-52 md:h-65"
            />

            <h3 className="text-[#FFF9EE] mt-4 font-semibold text-2xl">
              {p.name}
            </h3>

            <p className="text-[#FFF9EE]">
              Gold Grade Sun Dried Himalayan Shilajit Resin
            </p>

            <p className="mt-2 font-bold text-[#FFF9EE]">
              Rs. 29,900
            </p>

            <button className="mt-4 bg-gradient-to-r from-[#FFC936] to-[#997920] px-5 py-2 rounded-full font-medium cursor-pointer">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
