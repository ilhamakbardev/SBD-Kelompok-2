const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const allRoutes = require('./router');

app.use(bodyParser.json());
app.use(cors());

app.use(allRoutes);

const db = require('./models');
const PORT = 4500;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
