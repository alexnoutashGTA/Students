const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());


// Sample data: a FAQ list in JSON format
const faqs = [
    {
        question: "How can I stay connected with my friends?",
        answer: "Use messaging apps, social media, video calls, and plan regular meetups."
    },
    {
        question: "What are effective ways to keep friendships strong?",
        answer: "Communicate regularly, show genuine interest, and share experiences together."
    },
    {
        question: "How do I keep friends connected when far apart?",
        answer: "Schedule virtual hangouts, send thoughtful messages, and plan in-person visits."
    }
];

// GET endpoint to fetch FAQs
app.get('/faqs', (req, res) => {
    res.json(faqs);
});
app.post('/message', (req, res) => {});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
