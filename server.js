require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: ['https://anushatechportfolio.netlify.app', 'http://localhost:3000'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// API Route to Handle Contact Form Submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Portfolio <your@email.com>',
      to: 'yourpersonalemail@example.com', // Replace with your email
      subject: `New Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ message: '✅ Email sent successfully!', response });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
