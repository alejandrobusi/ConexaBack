const axiosConf = require('../services/axiosConf');

const getAllCharactersService = async (page) => {
  const { data } = await axiosConf.get(`/people/?page=${page}`);
  return data;
};

const getByNameService = async (search) => {
  const { data } = await axiosConf.get(`/people/?search=${search}`);
  return data;
};

module.exports = {
  getAllCharactersService,
  getByNameService,
};
