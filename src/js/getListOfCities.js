import { getCityByName } from './weatherAPI';

export const getListOfCities = inputValue => {
  const markup = getCityByName(inputValue).then(data => {
    if (data.length === 0) {
      return `<p class='error__text'>City not found, please try to change your search query</p>`;
    }

    return data
      .map(item => {
        return `<li class="city__item">
      <p class="city__name">${item.name}, ${item.sys.country}</p>
    </li>`;
      })
      .join('');
  });

  return markup;
};
