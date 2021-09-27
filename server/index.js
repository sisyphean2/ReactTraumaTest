const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database');
const setupModels = require('./models');
const setupRoutes = require('./routes');

const port = 3001;
const app = express();
const models = setupModels(database);

// middleware to allow standard client requests
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rest api routes
setupRoutes(app, models);

// start the server
app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Server running at ${url}`);
});