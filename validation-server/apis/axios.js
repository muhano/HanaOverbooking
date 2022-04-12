const axios = require("axios");

const instanceAxios = axios.create({
  baseURL: process.env.SERVER_BASE_URL
});

module.exports = instanceAxios