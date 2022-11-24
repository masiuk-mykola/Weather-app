import { changeFooterYear } from './js/changeFooterYear';
import { createDropdownList } from './js/createDropdownList';
import { getLatestCityWeather } from './js/getLatestCityWeather';
import { getWeatherByCity } from './js/getWeatherByCity';
import { getWeatherInKyiv } from './js/getWeatherInKyiv';
import { showFAQ } from './js/showFAQ';

changeFooterYear();
showFAQ();
createDropdownList();
getWeatherInKyiv();
getWeatherByCity();
getLatestCityWeather();
