require('dotenv').config()

const cors = require('cors');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const dbConnection = require('./database/config')

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Middewares to Routes
app.use('/api/v1', require('./routes/user'));

//Conexión a Base de Datos
dbConnection();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})