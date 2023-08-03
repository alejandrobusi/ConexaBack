const {
  getAllVehiclesService,
  getVehicleCompleteDataService,
} = require('../services/vehicles.service');

const getAllVehicles = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const resp = await getAllVehiclesService(page);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getVehicleCompleteData = async (req, res) => {
  try {
    const { id } = req.query;
    const resp = await getVehicleCompleteDataService(id);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllVehicles,
  getVehicleCompleteData,
};
