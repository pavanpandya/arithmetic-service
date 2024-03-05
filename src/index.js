require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { add, subtract, multiply, divide } = require("./arithmetica"); 
const app = express();
app.use(cors());

if (!process.env.PORT) {
  throw new Error("Please specify the PORT number for the HTTP server with the environment variable PORT.")
}

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Arithmetic service - Hello World!');
});

app.get('/calculate/*', (req, res) => {
  // Extracting expression from URL parameters
  const expression = decodeURIComponent(req.params[0]);

  // Evaluating the expression
  let result;
  try {
      result
      = eval
      (expression);
      res.json(result);
  } catch (error) {
      res.status(400).send('Invalid expression');
  }
}); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
