const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/mail', (req, res) => {
    res.status(200).send('Email sent: ');
});

app.post('/send-mail', (req, res) => {
  const { to, subject, text } = req.body;

    res.status(200).send('Email sent: ' + info.response);
});

