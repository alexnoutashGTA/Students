const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

const contentful = require('contentful')

const client = contentful.createClient({
    space: 'nhlpl73kcz1y',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'qBuwY0ofQyQouiBag1pKlfAAv0FsEK4TWrjTI8v1qcY'
})


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
    client.getEntry('5G9pM7jHO9NkzoWfoNyOft')
        .then((entry) => {
            return res.send(entry.fields.faqText);
        } )
        .catch(console.error)
});
app.post('/message', (req, res) => {});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
