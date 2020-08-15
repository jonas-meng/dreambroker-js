const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const { textLength, wordCount, charCount } = require('./analyzer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/analyze', async (req, res) => {
    var text = req.body['text'];
    return res.json({
        textLength: textLength(text),
        wordCount: wordCount(text),
        characterCount: charCount(text)
    });
})

app.listen(port, async () => {
    console.log(`Launch app on ${port}`);
});