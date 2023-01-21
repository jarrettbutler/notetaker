const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

//Creates a port or defaults to local 3000
const PORT = process.env.port || 3001;

const app = express();

//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

