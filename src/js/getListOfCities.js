// import WeatherAPI from './weatherAPI';

import { getCityByName } from './weatherAPI';

export const getListOfCities = inputValue => {
  const markup = getCityByName(inputValue).then(data =>
    data
      .map(item => {
        return `<li class="city__item">
      <p class="city__name">${item.name}, ${item.sys.country}</p>
    </li>`;
      })
      .join('')
  );

  return markup;
};
