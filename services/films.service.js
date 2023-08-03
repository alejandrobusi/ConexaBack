const axiosConf = require('../services/axiosConf');

const getAllFilmsService = async () => {
  const { data } = await axiosConf.get(`/films`);
  return data;
};

module.exports = {
  getAllFilmsService,
};
