require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: '*', // Allow all origins (for testing)
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// ✅ Add a root route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// ✅ Contact Form API
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "❌ All fields are required!" });
  }

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gaddamabinayateja@gmail.com", // Replace with your actual email
      subject: `New Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("✅ Email sent:", response);
    res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
