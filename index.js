//importações 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const produtoResource = require('./resources/produto-resource');


const app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
const PORT = process.env.PORT || 5000;

//conectar mongodb
mongoose.connect('mongodb://localhost:27017/makedb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});



app.use('/produto', produtoResource);

//servidor rodando looping 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


