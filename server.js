const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const { adjective, noun, pluralNoun, personname, adjective2, clothing, noun2, city, pluralNoun2, adjective3 } = req.body;

    
    if (!adjective || !noun || !pluralNoun || !personname || !adjective2 || !clothing || !noun2 || !city || !pluralNoun2 || !adjective3) {
        res.status(400).send('<h2>Please fill out all the fields!</h2>');
        return;
    }

    const madLib = `There are many ${adjective} ways to choose a/an ${noun} to read. First, you could ask for recommendations from your friends and ${pluralNoun}. Just don't ask Aunt ${personname}, she only reads ${adjective2} books with ${clothing}-ripping goddesses on the cover. If your friends and family are no help, try checking out the ${noun2} Review in The ${city} Times. If the ${pluralNoun2} featured there are too ${adjective3} for your taste, try something a little.`;

    // Enhanced HTML template
    const htmlResponse = `
        <html>
            <head>
                <title>Mad Libs Generator</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #D5DEEF;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        padding: 120px;
                    }
                    h2 {
                        color: #333;
                    }
                    p {
                        color: #032030;
                        max-width: 800px;
                        margin: 20 auto;
                        padding: 20px;
                        background-color: #8aaee0;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    a {
                        color: #007BFF;
                        text-decoration: none;
                    }
                    button {
                        background-color: #006da4;
                        color: #fff;
                        padding: 10px 20px;
                        font-size: 16px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        text-decoration: none;
                        transition: background-color 0.3s ease, color 0.3s ease;
                      }
                      
                      button:hover {
                        background-color: #fff;
                        color: #006da4;
                      }
                      
                </style>
            </head>
            <body>
                <h2>Generated Mad Lib:</h2>
                <p>${madLib}</p>
                <button onclick="location.href='/';">Back to Form</button>
            </body>
        </html>
    `;

    res.send(htmlResponse);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
