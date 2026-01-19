const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

app.post("/send-order", (req, res) => {
    const { name, items, total } = req.body;

    // Prepare order message
    const message = `
New Order 🛒
Name: ${name}
Items:
${items.map(i => `- ${i.name} x${i.qty} (£${i.price})`).join("\n")}
Total: £${total.toFixed(2)}
    `;

    client.messages.create({
        from: "whatsapp:+14155238886",  // Twilio Sandbox number
        to: "whatsapp:+92XXXXXXXXXX",   // Client's WhatsApp number
        body: message
    }).then(msg => res.json({ success: true, sid: msg.sid }))
      .catch(err => res.status(500).json({ success: false, error: err.message }));
});

app.listen(5000, () => console.log("Server running on port 5000"));
