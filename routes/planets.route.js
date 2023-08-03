const { Router } = require('express');
const { getAllPlanets } = require('../controllers/planets.controller');
const route = Router();

route.get('/listPlanets', getAllPlanets);

module.exports = route;
