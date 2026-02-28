const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
// Render sathi 10000 port vaprava lagto
const PORT = process.env.PORT || 10000;

// Middleware setup
app.use(cors());
app.use(express.json());

/**
 * 1. STATIC FILES SERVING (Mahaatvache!)
 * He settings tumchya 'public' folder madhil index.html la load karnyaasathi aahe.
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 2. DATABASE CONNECTION
 */
const MONGO_URI = 'mongodb+srv://apnimanzil:apnimanzil@cluster0.mongodb.net/apnimanzil?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch(err => console.log('❌ DB Connection Error:', err));

/**
 * 3. DATA SCHEMA
 */
const bookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    service: String,
    date: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

/**
 * 4. API ROUTES
 */
app.post('/api/book', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Booking Saved!' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Database Error' });
    }
});

/**
 * 5. CATCH-ALL ROUTE
 * Jar kontihi chuki chi link takli tar punha home page dakhva.
 * Black screen talnyasathi he settings garjeche aahe.
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server suru kara
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);