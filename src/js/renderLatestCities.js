import { markupLatestCities } from './markupLatestCities';
import { refs } from './refs';

export const renderLatestCities = () => {
  const markup = markupLatestCities();
  refs.latestCitiesWrapper.innerHTML = '';

  refs.latestCitiesWrapper.insertAdjacentHTML('afterbegin', markup);
};
