const express = require('express');
const port = process.env.PORT || 3000
const app = express();
const bodyParser = require('body-parser');
const contentful = require('contentful');
const sql = require("mssql");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://alexnoutash:MyClass2025!@cluster0.fpj2nzm.mongodb.net/?retryWrites=true&w=majority"; // Replace with your connection string
const mongoClient = new MongoClient(uri);
const cors = require("cors");
const {response} = require("express");


app.use(cors());


const client = contentful.createClient({
    space: 'nhlpl73kcz1y',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'qBuwY0ofQyQouiBag1pKlfAAv0FsEK4TWrjTI8v1qcY'
})
// create application/json parser
var jsonParser = bodyParser.json()

// Sample data: a FAQ list in JSON format

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
    res.set('Access-Control-Allow-Origin', '*');

    new sql.Request().query("SELECT * FROM chathistory", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            res.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
})
app.post('/personalInfo',jsonParser, async (req, res) => {
    try {
        const data = req.body;
        const studentId = data["studentId"];
        const database = mongoClient.db('MyBook');
        const collection = database.collection('PersonalInformation');
        await mongoClient.connect();
        const user = await collection.findOne({ StudentId: `${studentId}` });
        res.status(200).send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send({"message":error.message});
    }
});

app.post('/personalInfoUpdate',jsonParser, async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const id = data["_id"];
        const database = mongoClient.db('MyBook');
        const collection = database.collection('PersonalInformation');
        await mongoClient.connect();
        const user = await collection.replaceOne({ id: `${id}` }, data);
        res.status(200).send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send({"message":error.message});
    }
});



app.get('/personalinfoes', (req, res) => {
    new sql.Request().query("SELECT * FROM Table_1Rahman", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            res.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
})
app.post('/personalinfo', jsonParser, async (request, response) => {

    try {
        const data = request.body;
        const studentId = data["studentId"];
        console.log(studentId);
        await sql.connect(config);

        // Create a new request
        let sqlrequest = new sql.Request();

        // Define input parameters (if any)
        // Example: Assuming your stored procedure 'GetAuthorsByBirthDate' takes StartDate and EndDate
        sqlrequest.input('StudentNumber', sql.TYPES.BigInt, studentId);

        // Execute the stored procedure
        const result = await sqlrequest.execute('QueryStudentsAddress');

        // Access the results
        console.log("Recordsets:", result.recordsets); // Array of recordsets

        response.status(200).send(result.recordset); // Send query result as response

    } catch (err) {
        console.error("Error calling stored procedure:", err);
    }
})


app.post('/message',jsonParser, (request, response) => {
    try {
    const data = request.body;
    const table = 'chathistory';
    console.log("Sent Data ");
    console.log(data);
    sql.connect(config, err => {
        if (err) {
            throw err;
        }
        console.log("Connection Successful!");
    });

    if (!table || !data || typeof data !== 'object') {
        return res.status(400).json({error: 'Missing or invalid table or data'});
    }

    const columns = Object.keys(data).join(', ');
    const values = Object.values(data);
    const placeholders = values.map((x) => `'${x}'`).join(', ');
    console.log('column names',columns);
    console.log('values for columns', values);
    console.log(placeholders);

    const sqlStatement = `INSERT INTO ${table} (${columns})
                 VALUES (${placeholders})`;

    console.log('Generated SQL:', sqlStatement);

        new sql.Request().query(sqlStatement, values, (err, result) => {
            if (err) {
                console.error('Insert error:', err);
                return response.status(500).json({error: 'Insert failed'});
            }
        });
        response.status(204).json({
            message: 'Insert successful',
        });
    }
    catch(error){
        console.log("Error", error.message );
        return response.status(500).json({error: 'Insert failed'});
    }

});






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


app.get('', (req, res) => {
    return res.send('Hello World!');
});
// GET endpoint to fetch FAQs
