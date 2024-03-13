require('dotenv').config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(require('cookie-parser')())

app.use('/api/profile',require('./routes/profileRouter'));
app.use('/api/',require('./routes/authenticationRouter'))

app.listen(process.env.PORT, async () => {
    const db = require('./config/database');
    db.initialize(() => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
}); 