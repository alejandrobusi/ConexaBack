const { Router } = require('express');
const {
  getAllVehicles,
  getVehicleCompleteData,
} = require('../controllers/vehicles.controller');
const route = Router();

route.get('/listVehicles', getAllVehicles);

route.get('/vehicleWithPilotsAndFilms', getVehicleCompleteData);

module.exports = route;
