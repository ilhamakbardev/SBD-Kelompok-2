const express = require('express');

const app = express();
// const allRoutes = require('./router');

app.use(express.json());

// app.use(allRoutes);

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
