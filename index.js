const express = require('express');
const cors = require('cors');
//Config
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

module.exports =  app;

