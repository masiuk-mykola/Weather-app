import { cleanWidget } from './cleanWidget';
import { closeList } from './closeList';
import { getWidget } from './getMarkupForWidget';
import { refs } from './refs';
import { scrollToTop } from './scrollToTop';

export const getWeatherByCity = () => {
  refs.imgs.forEach(img =>
    img.addEventListener('click', e => {
      const cityName = e.target.alt;
      getWidget(cityName).then(markup => {
        closeList();
        cleanWidget();
        scrollToTop();
        refs.widget.insertAdjacentHTML('afterbegin', markup);
      });
    })
  );
};
