const axios = require("axios");

const instanceAxios = axios.create({
  baseURL: "http://localhost:3000"
});

module.exports = instanceAxios