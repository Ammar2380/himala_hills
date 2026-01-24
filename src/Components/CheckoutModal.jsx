import { useState } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, ChevronRight } from "lucide-react";
import { formatPrice } from "./formatPrice";

const OWNER_WHATSAPP = "923333058456"; 

const CheckoutModal = ({ total, cart, onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const generateWhatsAppMessage = () => {
    const items = cart
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name} (${i.variant.size}) x${i.qty} = ${formatPrice(
            i.variant.price * i.qty
          )}`
      )
      .join("%0A");

    return `🛒 *NEW ORDER RECEIVED*

👤 *Customer Details*
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

🧾 *Order Items*
${items}

💰 *Total: ${formatPrice(total)}*`.trim();
  };

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all details");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const message = generateWhatsAppMessage();
      const whatsappURL = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(
        message
      )}`;

      setStep(2);

      setTimeout(() => {
        window.open(whatsappURL, "_blank"); 
        onSuccess();
        onClose();
      }, 1200);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#1a3d3d]/90 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="
          bg-white rounded-[2rem] overflow-hidden shadow-2xl relative
          w-full max-w-md
          sm:max-w-md
          md:max-w-md
          lg:max-w-md
          h-auto
          sm:h-auto
          md:h-auto
          lg:h-auto
        "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <X size={24} />
        </button>

        {step === 1 ? (
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-black mb-2 tracking-tighter text-center sm:text-left">
              DELIVERY INFO
            </h2>
            <p className="text-gray-400 mb-4 sm:mb-6 font-medium text-center sm:text-left">
              Confirm details to send order via WhatsApp.
            </p>

            <div className="space-y-2 sm:space-y-3">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-50 p-3 sm:p-4 rounded-xl focus:ring-2 ring-[#c5a059] font-medium text-sm sm:text-base"
              />
              <input
                name="phone"
                placeholder="WhatsApp Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-gray-50 p-3 sm:p-4 rounded-xl focus:ring-2 ring-[#c5a059] font-medium text-sm sm:text-base"
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleChange}
                className="w-full bg-gray-50 p-3 sm:p-4 rounded-xl focus:ring-2 ring-[#c5a059] font-medium h-20 sm:h-24 text-sm sm:text-base"
              />
            </div>

            <div className="pt-4 border-t flex justify-between items-center mb-4">
              <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">
                Total
              </span>
              <span className="text-lg sm:text-2xl font-black">{formatPrice(total)}</span>
            </div>

            <button
              onClick={handleOrder}
              disabled={loading}
              className="w-full bg-[#1a3d3d] text-white py-3 sm:py-4 rounded-xl font-black text-sm sm:text-lg flex items-center justify-center gap-2 hover:bg-black transition-all"
            >
              {loading ? "SENDING..." : "CONFIRM & SEND"}
              <ChevronRight size={16} className="sm:!w-4 sm:!h-4" />
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10 }}
            >
              <CheckCircle2
                size={60} sm={80}
                className="mx-auto text-green-500 mb-4 sm:mb-6"
              />
            </motion.div>
            <h2 className="text-xl sm:text-3xl font-black mb-2 tracking-tighter">
              ORDER SENT
            </h2>
            <p className="text-gray-500 font-medium text-sm sm:text-base">
              Opening WhatsApp for owner confirmation…
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CheckoutModal;
