const express = require('express');
const errorMiddleware = require('./middleware/error.middleware');
const apiRoutes = require('./routes/app.routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

app.use(errorMiddleware);

module.exports = app;