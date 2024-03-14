require('dotenv').config();

const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(require('cookie-parser')())

app.use('/api/profile',require('./routes/profileRouter'));
app.use('/api/',require('./routes/authenticationRouter'))

app.use(express.static(path.resolve(__dirname,'../vite-project/dist')));

app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'../vite-project/dist/index.html')));

app.listen(process.env.PORT, async () => {
    const db = require('./config/database');
    db.initialize(() => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
}); 