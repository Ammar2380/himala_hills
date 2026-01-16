import { useState } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, ChevronRight } from "lucide-react";
import { formatPrice } from "./formatPrice";

const OWNER_WHATSAPP = "923220838604"; // owner number

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

    return `
🛒 *NEW ORDER RECEIVED*

👤 *Customer Details*
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

🧾 *Order Items*
${items}

💰 *Total: ${formatPrice(total)}*
    `.trim();
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
        window.open(whatsappURL, "_blank"); // 🚀 redirect to WhatsApp
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
        className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <X size={24} />
        </button>

        {step === 1 ? (
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-black mb-2 tracking-tighter">
              DELIVERY INFO
            </h2>
            <p className="text-gray-400 mb-6 font-medium">
              Confirm details to send order via WhatsApp.
            </p>

            <div className="space-y-3">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-50 p-4 rounded-xl focus:ring-2 ring-[#c5a059] font-medium"
              />
              <input
                name="phone"
                placeholder="WhatsApp Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-gray-50 p-4 rounded-xl focus:ring-2 ring-[#c5a059] font-medium"
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleChange}
                className="w-full bg-gray-50 p-4 rounded-xl focus:ring-2 ring-[#c5a059] font-medium h-24"
              />
            </div>

            <div className="pt-4 border-t flex justify-between items-center mb-4">
              <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">
                Total
              </span>
              <span className="text-2xl font-black">{formatPrice(total)}</span>
            </div>

            <button
              onClick={handleOrder}
              disabled={loading}
              className="w-full bg-[#1a3d3d] text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-black transition-all"
            >
              {loading ? "SENDING..." : "CONFIRM & SEND"}
              <ChevronRight size={18} />
            </button>
          </div>
        ) : (
          <div className="p-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10 }}
            >
              <CheckCircle2
                size={80}
                className="mx-auto text-green-500 mb-6"
              />
            </motion.div>
            <h2 className="text-3xl font-black mb-2 tracking-tighter">
              ORDER SENT
            </h2>
            <p className="text-gray-500 font-medium">
              Opening WhatsApp for owner confirmation…
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CheckoutModal;
