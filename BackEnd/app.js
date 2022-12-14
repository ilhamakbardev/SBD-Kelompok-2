const express = require('express');
const cors = require('cors');

const app = express();
const allRoutes = require('./router');

app.use(express.json());
app.use(cors());

app.use(allRoutes);

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
