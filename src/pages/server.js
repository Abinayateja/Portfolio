const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow only frontend to make requests
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/contactForm'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.error('Error connecting to MongoDB:', err));

// Create Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// API Route to handle form submission
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});
// Test Route for Root URL
app.get("/", (req, res) => {
    res.send("Server is running and connected to MongoDB!");
  });
  
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
