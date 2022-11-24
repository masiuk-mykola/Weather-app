export const markupLatestCities = () => {
  const LOCALSTORAGE_KEY = 'city';
  let cities = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (cities === null) {
    cities = [];
  }
  cities.length = 5;
  return cities
    .map(item => {
      return `<span class="city__name">${item}</span>`;
    })
    .join(' ');
};
