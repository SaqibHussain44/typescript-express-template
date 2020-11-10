require('dotenv').config()
import express = require('express');
import bodyParser =  require('body-parser');

const app: express.Application = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
