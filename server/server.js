const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT;

// Routes import
const charactersRoute = require('../routes/characters.route');
const filmsRoute = require('../routes/films.route');
const vehiclesRoute = require('../routes/vehicles.route');
const planetsRoute = require('../routes/planets.route');

// Middlewares use
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes use
app.use('/characters', charactersRoute);
app.use('/films', filmsRoute);
app.use('/vehicles', vehiclesRoute);
app.use('/planets', planetsRoute);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
