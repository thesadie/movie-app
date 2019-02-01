const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1200;

const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movies'
});



app.use(express.static(__dirname + '/../public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/movies', (req, res) => {

  connection.query('SELECT * FROM titles;', (err, movies) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(movies));
      res.end();
    }
  });

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));