const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const Inquiry = require('./models/Inquiry');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route to handle form submissions (POST)
app.post('/api/inquiries', async (req, res) => {
    const { name, email, phone , product , quantity} = req.body;

    // Validate input
    if (!name || !email || !phone || !product || !quantity) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Save to database
        const newInquiry = new Inquiry({ name, email, phone , product,quantity});
        await newInquiry.save();
        console.log('Inquiry saved to database');

        // Send email to the address provided in the form
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // Use the email from the form submission
            subject: 'Thank you for your inquiry',
            text: `Dear ${name},

Thank you for your inquiry. We have received your information and will get back to you soon.

Product Details:
-------------------------------------
| Product Name        | Quantity    |
|---------------------|-------------|
| ${product}          | ${quantity} |
-------------------------------------

Your submitted details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Best regards,
Bajaj Wellmed International
9811561415`
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        res.status(201).json({ message: 'Inquiry saved and confirmation email sent successfully' });
    } catch (error) {
        console.error('Detailed error:', error);
        if (error.code === 'EAUTH') {
            console.error('Authentication error. Check your email credentials.');
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Optional: Route to get all inquiries (GET)
app.get('/api/inquiries', async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        res.status(200).json(inquiries);
    } catch (error) {
        console.error('Error retrieving inquiries:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));