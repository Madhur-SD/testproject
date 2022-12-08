const express = require('express');
const cors = require("cors");
const app = express();
const http = require('http');
const https = require('https')
const fs = require('fs')

app.use(express.json());

const version1 = require('./src/api/v1/index.js')

app.use('/v1', version1)
app.use(cors())

var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');


let credentials = { key: privateKey, cert: certificate };


const server = http.createServer(app);
const secureServer = https.createServer(credentials, app)

secureServer.listen(3009, () => {
    console.log(`listening at 3009`);
})
server.listen(8000, () => {
    console.log("server running on 8000");
})