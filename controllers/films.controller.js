const { getAllFilmsService } = require('../services/films.service');

const getAllFilms = async (req, res) => {
  try {
    const resp = await getAllFilmsService();
    res.status(200).json(resp);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getAllFilms,
};
