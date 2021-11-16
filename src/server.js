const express = require('express');
const routes = require('./routes');
require('./database');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(routes);

app.listen(3000);

console.log("Escutando na porta 3000");