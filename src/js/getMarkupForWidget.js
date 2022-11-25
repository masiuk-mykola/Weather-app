import { getDate } from './getDate';
import { getWeatherByCityname } from './weatherAPI';

export const getWidget = cityName => {
  const markup = getWeatherByCityname(cityName).then(data => {
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const capLettDescription =
      description.charAt(0).toUpperCase() + description.slice(1);
    const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const city = `${data.name}, ${data.sys.country}`;
    const minTemp = Math.floor(data.main.temp_min - 273.15);
    const maxTemp = Math.floor(data.main.temp_max - 273.15);
    const temp = Math.floor(data.main.feels_like - 273.15);

    return `
    <div class="widget__wrapper">
    <div class="widget__info">
        <img
          class="widget__img"
          src=${imgUrl}
          alt=${main}
        />
        <div>
    <h3 class="widget__temp">${temp}°C</h3>
          <p class="widget__main">${main}</p>
          <p class="widget__description">${capLettDescription}</p>
        </div>
      </div>
      <div class="widget__location">
        <p class="city">${city}</p>
        <p class="date">${getDate()}</p>
      </div>
      </div>
      <ul class="widget__temperature">
        <li class="widget__min">
          <p class="status">Min</p>
          <p class="temperature">${minTemp}°C</p>
        </li>
        <li class="widget__max">
          <p class="status">Max</p>
          <p class="temperature">${maxTemp}°C</p>
        </li>
      </ul>`;
  });

  return markup;
};
