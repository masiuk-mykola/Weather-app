import axios from 'axios';

const APIkey = '19352a344725c4341eb7ee01ee830c64';

export const getWeatherByCityname = async cityName => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIkey}`;
  try {
    const weather = await axios.get(url);
    return weather.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCityByName = async query => {
  const url = `http://api.openweathermap.org/data/2.5/find?q=${query}&APPID=${APIkey}`;
  try {
    const cities = await axios.get(url);
    return cities.data.list;
  } catch (error) {
    console.log(error.message);
  }
};
