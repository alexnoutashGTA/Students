const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
const bodyParser = require('body-parser');
const contentful = require('contentful');
const sql = require("mssql");


const client = contentful.createClient({
    space: 'nhlpl73kcz1y',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'qBuwY0ofQyQouiBag1pKlfAAv0FsEK4TWrjTI8v1qcY'
})
// create application/json parser
var jsonParser = bodyParser.json()

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

var config = {
    "user": "alexnoutash", // Database username
    "password": "MyClass2025!", // Database password
    "server": "citicollege.database.windows.net", // Server IP address
    "database": "MyBook", // Database name
    "options": {
        "encrypt": true // Disable encryption
    }
}
sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
});

// GET endpoint to fetch FAQs
app.get('/faqs', (req, res) => {
    client.getEntry('5G9pM7jHO9NkzoWfoNyOft')
        .then((entry) => {
            return res.send(entry.fields.faqText);
        } )
        .catch(console.error)
});
app.get('/messages', (req, res) => {
    new sql.Request().query("SELECT * FROM chathistory", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            res.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
})
app.post('/message', (req, res) => {});

app.post('/login',jsonParser, (req, res) => {

    try {
        console.log(req.body);

        return res.status(200).send({result:"Login successful!"});
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
