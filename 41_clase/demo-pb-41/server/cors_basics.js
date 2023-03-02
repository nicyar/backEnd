const express = require('express');
const cors = require('cors');

const PORT = 8080;

const app = express();

const corsOptions = {
  origin: ['http://gatsydgytas:3000','https://midominio.com'],
  methods: "GET,POST"
};

app.use(cors()); // all origins

app.get('/', (req, res) => {
  res.send("ALL GOOD");
});

app.listen(PORT, () => {
  console.log("Ready on port => ", PORT);
})