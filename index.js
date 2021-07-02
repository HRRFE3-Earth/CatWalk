const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const { GIT_TOKEN } = require('./config.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.listen(PORT, (error) => {
  if (error) {
    console.log(`failed to connect to server port: ${PORT}`);
  } else {
    console.log(`connected to the server at ${PORT}`);
  }
});

//Initial commit to refactor front-end

// reviews
app.all('/reviews/*', (req, res, next) => {
  console.log(req.url);
  axios({
    method: req.method,
    url: 'http://18.118.119.85' + req.url,
    headers: {
      Authorization: GIT_TOKEN
    },
    data: req.body
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

// overview
app.all('/products/*', (req, res, next) => {
  axios({
    method: req.method,
    url: 'http://18.118.254.96' + req.url,
    headers: {
      Authorization: GIT_TOKEN
    },
    data: req.body
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

// questions
app.all('/qa/*', (req, res, next) => {
  axios({
    method: req.method,
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe' + req.url,
    headers: {
      Authorization: GIT_TOKEN
    },
    data: req.body
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});