const express = require('express');
const cors = require('cors');
const app = express();
 
require('./src/Routes/index')(app); 

app.use(express.static('public'))
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 5000);