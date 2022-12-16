require('dotenv/config');
const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

connect(process.env.URL, () => {
  console.log('database connected');
});

const allRoutes = require('./router');

app.use(bodyParser.json());
app.use(cors());

app.use(allRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
