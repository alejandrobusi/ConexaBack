const { getAllPlanetsService } = require('../services/planets.service');

const getAllPlanets = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const resp = await getAllPlanetsService(page);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllPlanets,
};
