// server.js
import 'dotenv/config';
import express from 'express';
import twilio from 'twilio';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// ✅ Send WhatsApp Order
app.post('/send-order', async (req, res) => {
  const { name, phone, email, address, items, subtotal, shipping, total } = req.body;

  // Compose structured WhatsApp message
  const messageBody = `
🛒 *New Order from: ${name}*

👤 *Customer Details:*
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}

🛍️ *Items:*
${items.map((i, index) => `${index + 1}️⃣ ${i.name}
   Size: ${i.selectedOption || 'Standard'}
   Quantity: ${i.qty}
   Total: £${(i.price * i.qty).toFixed(2)}`).join("\n\n")}

💰 *Subtotal:* £${subtotal.toFixed(2)}
🚚 *Shipping:* ${shipping === 0 ? "FREE" : "£" + shipping.toFixed(2)}
🤑 *Total:* £${total.toFixed(2)}

🕒 Order Time: ${new Date().toLocaleString()}

Thank you for your order! ✅
`;

  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM, // e.g., whatsapp:+14155238886
      to: 'whatsapp:+923220838604',           // your WhatsApp number
      body: messageBody
    });

    return res.json({ success: true, sid: message.sid });

  } catch (err) {
    console.error("Twilio error:", err.message);
    return res.json({ success: false, error: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
