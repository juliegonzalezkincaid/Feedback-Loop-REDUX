const express = require('express');
const app = express();
const bodyParser = require
const feedback = require('./routes/feedback.router.js')
('body-parser');
const PORT = process.env.PORT || 5432;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES 
 * ---------- **/
app.use('/feedback', feedback)


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});