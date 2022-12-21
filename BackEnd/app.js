require('dotenv/config');
const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(
  cors({
    origin: 'https://belajar-db.vercel.app/',
  })
);

connect(
  'mongodb+srv://ilham:Qazwsx2134@cluster0.0akzywa.mongodb.net/?retryWrites=true&w=majority',
  () => {
    console.log('database connected');
  }
);

const allRoutes = require('./api/index');

app.use(bodyParser.json());

app.use(allRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
