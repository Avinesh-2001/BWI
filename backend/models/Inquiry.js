const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    
    quantity: {
        type: String,
        required: true
    }
});

const Inquiry = mongoose.model('Inquiry', InquirySchema);
module.exports = Inquiry;
