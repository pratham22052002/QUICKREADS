const express = require('express');
const axios = require('axios');
const weatherR = express.Router();
require("dotenv").config();
const apikey = process.env.WAPIKEY;

const getWeatherData = async () => {
  const url = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: 'jaunpur' },
    headers: {
      'X-RapidAPI-Key': `${apikey}`,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(url);
  } catch (error) {
    console.error(error);
  }
};

// Call the function to fetch weather data on module import
getWeatherData();

module.exports = weatherR;
