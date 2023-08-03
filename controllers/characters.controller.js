const {
  getAllCharactersService,
  getByNameService,
} = require('../services/characters.service');

const getAllCharacters = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const resp = await getAllCharactersService(page);
    res.status(200).json(resp);
  } catch (error) {
    res.json(error.message);
  }
};

const getByName = async (req, res) => {
  try {
    const search = req.query.search;
    const resp = await getByNameService(search);
    res.status(200).json(resp);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getAllCharacters,
  getByName,
};
