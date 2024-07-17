const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/entertainment-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
