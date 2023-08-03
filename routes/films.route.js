const { Router } = require('express');
const { getAllFilms } = require('../controllers/films.controller');
const route = Router();

route.get('/listFilms', getAllFilms);
module.exports = route;
