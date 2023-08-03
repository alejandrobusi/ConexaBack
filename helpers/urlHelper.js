const { default: axios } = require('axios');
const axiosConf = require('../services/axiosConf');

const getLastNumberOfUrlArray = (array) => {
  const numbers = array.map((url) => {
    const regex = /\/(\d+)\/$/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  });
  return numbers;
};

const makeMultipleRequests = async (urlArray) => {
  try {
    if (urlArray.length === 0) return [];
    const requests = urlArray.map((url) => axios.get(url));
    const responses = await Promise.all(requests);
    const responseData = responses.map((response) => response.data);
    return responseData;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getLastNumberOfUrlArray,
  makeMultipleRequests,
};
