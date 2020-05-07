const express = require('express');

const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use('/uploads',express.static('uploads'));

//Routes
app.get('/', (req, res) => {
    res.send(JSON.stringify({
        pageTitle: "HOME"
    }));
});

mongoose.connect(process.env.DBCONNECTION_STRING, { useNewUrlParser: true }, (err) => {
    // console.log('error -- ' + err);
    // console.log('state -- ' + mongoose.connection.readyState);
    console.log('DB connected!');
});

app.listen(3000);