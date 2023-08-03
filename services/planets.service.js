const axiosConf = require('../services/axiosConf');

const getAllPlanetsService = async (page) => {
  const { data } = await axiosConf.get(`/planets/?page=${page}`);
  return data;
};

module.exports = {
  getAllPlanetsService,
};
