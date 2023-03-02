const express = require('express');
const cors = require('cors');
const config = require('./src/config/env.config');
const apiRoutes = require('./src/routers/app.routers');
const errorMiddleware = require('./src/middlewares/error.middleware');

const app = express();

// App Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Api routes
app.use('/api', apiRoutes);

// Error middleware
app.use(errorMiddleware);

const server = app.listen(config.PORT, () => {
  console.log(`Using ${config.DATA_SOURCE} as data source`)
  console.log("Server is up and runningnn on port => ", config.PORT);
});

server.on('error', (error) => {
  console.log("Error with the Server:");
  console.log(error.message);
});
