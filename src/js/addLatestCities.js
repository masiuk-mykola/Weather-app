const LOCALSTORAGE_KEY = 'city';

export const addLatestCities = city => {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  const userData = data ? JSON.parse(data) : [];
  if (userData.includes(city)) {
    return;
  }
  userData.unshift(city);
  const value = JSON.stringify(userData);
  localStorage.setItem(LOCALSTORAGE_KEY, value);
};
