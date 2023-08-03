const { Router } = require('express');
const {
  getAllCharacters,
  getByName,
} = require('../controllers/characters.controller');
const route = Router();

route.get('/listAllCharacters', getAllCharacters);

route.get('/searchCharacterByName', getByName);

module.exports = route;
