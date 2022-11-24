import { cleanWidget } from './cleanWidget';
import { closeList } from './closeList';
import { getWidget } from './getMarkupForWidget';
import { refs } from './refs';
import { renderLatestCities } from './renderLatestCities';

export const getLatestCityWeather = () => {
  renderLatestCities();

  const latestCities = document.querySelectorAll('.city__name');
  latestCities.forEach(item =>
    item.addEventListener('click', e => {
      const cityName = e.target.textContent.trim();
      getWidget(cityName).then(markup => {
        closeList();
        cleanWidget();
        refs.widget.insertAdjacentHTML('afterbegin', markup);
      });
    })
  );
};
