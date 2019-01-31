const express = require('express');
const app = express();
const port = 1200;

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));