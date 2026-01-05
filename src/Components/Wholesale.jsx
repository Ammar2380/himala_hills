import img from './Frame 20.png';

const Wholesale = () => {
  return (
    <section className="bg-[#FFF9EE] py-24" id="wholesale">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image div */}
        <div className="h-94 overflow-hidden">
          <img
            src={img}
            alt="Wholesale Service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div>
          <h2 className="md:text-7xl text-5xl font-bold leading-tighter mb-4">
            Wholesale & Private Label Services
          </h2>
          <p className="leading-tight">
            Bulk Resin Supply  Authentic Himalayan Shilajit<br />
            Private Labeling  Your brand name, your design<br />
            Label Design & Printing  Professional packaging support<br />
            Premium Glass Jar & Spoon Kits  Ready to sell<br />
            Custom Quantity Orders  Flexible from small to bulk<br />
            Worldwide Shipping  Fast, reliable delivery across the <br /> USA and globally
          </p>
        </div>

      </div>
    </section>
  );
};

export default Wholesale;
``