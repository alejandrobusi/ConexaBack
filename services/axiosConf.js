const axios = require('axios');

const URL_BASE = process.env.URL_API_ST;

const axiosInstance = axios.create({
  baseURL: URL_BASE,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = axiosInstance;
