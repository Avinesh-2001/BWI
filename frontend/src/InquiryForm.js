import React, { useState, useEffect } from 'react';

const InquiryForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [inquiries, setInquiries] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inquiry = { name, email, message };

        try {
            const response = await fetch('http://localhost:5000/api/inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inquiry),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            // Reset the form fields
            setName('');
            setEmail('');
            setMessage('');

            // Optionally, fetch inquiries again to update the state
            fetchInquiries();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchInquiries = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/inquiries');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setInquiries(data);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
        }
    };

    useEffect(() => {
        fetchInquiries(); // Fetch inquiries on component mount
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    required
                />
                <button type="submit">Send</button>
            </form>

            {/* Display inquiries */}
            <ul>
                {inquiries.map((inquiry) => (
                    <li key={inquiry._id}>{inquiry.message} - {inquiry.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default InquiryForm;
