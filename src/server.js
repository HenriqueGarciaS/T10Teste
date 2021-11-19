const express = require('express');
const routes = require('./routes');
require('./database');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin : "*",
    optionsSucessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000);

console.log("Escutando na porta 5000");