import { cleanWidget } from './cleanWidget';
import { closeList } from './closeList';
import { getWidget } from './getMarkupForWidget';
import { refs } from './refs';

export const getWeatherInKyiv = () => {
  getWidget('Kyiv').then(markup => {
    closeList();
    cleanWidget();

    refs.widget.insertAdjacentHTML('afterbegin', markup);
  });
};
