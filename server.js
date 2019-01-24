const express = require('express');
const bodyParser = require('body-parser');

const article = require('./routes/article');
const app = express();

const { DB_USERNAME_ML, DB_PASSWORD_ML } = process.env;

const mongoose = require('mongoose');
let mongoDB = `mongodb://${DB_USERNAME_ML}:${DB_PASSWORD_ML}@ds247479.mlab.com:47479/news-stories`

mongoose.connect(mongoDB, { useNewUrlParser: true } );
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/articles', article);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

// DEPLOY THE JSON SERVER BIT U CUNT