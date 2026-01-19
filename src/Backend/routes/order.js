const express = require("express");
const router = express.Router();
const twilio = require("twilio");

const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

router.post("/send-order", (req, res) => {
  const { name, product, qty, total, address, phone } = req.body;

  const message = `
New Order 🛒
Name: ${name}
Product: ${product}
Qty: ${qty}
Total: Rs ${total}
Address: ${address}
  `;

  client.messages
    .create({
      from: "whatsapp:+14155238886", // Twilio Sandbox number
      to: `whatsapp:${phone}`,        // Client's WhatsApp number
      body: message
    })
    .then(msg => res.json({ success: true, sid: msg.sid }))
    .catch(err => res.status(500).json({ success: false, error: err.message }));
});

module.exports = router;
