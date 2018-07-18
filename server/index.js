// Main starting point of the server
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
console.log(process.env.MONGO_URI)
const url_mongodb="mongodb+srv://johel:johel123@cluster0-jsxx9.mongodb.net/auth"||'mongodb://localhost:27017/auth';
console.log("que paso"+url_mongodb)
process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection',error.message);
  });
// DB Setup
mongoose.connect(url_mongodb)
    .then( () => console.log('entre'))
    .catch(err => {

        console.error(err)
        process.exit(1)
    });

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);