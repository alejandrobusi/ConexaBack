const {
  getLastNumberOfUrlArray,
  makeMultipleRequests,
} = require('../helpers/urlHelper');
const axiosConf = require('../services/axiosConf');

const getAllVehiclesService = async (page) => {
  const { data } = await axiosConf.get(`/vehicles/?page=${page}`);
  return data;
};

const getVehicleCompleteDataService = async (id) => {
  const { data } = await axiosConf.get(`/vehicles/${id}/`);
  const films = await makeMultipleRequests(data?.films);
  const pilots = await makeMultipleRequests(data?.pilots);
  return { ship: data, films, pilots };
};

module.exports = {
  getAllVehiclesService,
  getVehicleCompleteDataService,
};
