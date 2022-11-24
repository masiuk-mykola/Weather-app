import { cleanWidget } from './cleanWidget';
import { closeList } from './closeList';
import { getListOfCities } from './getListOfCities';
import { getWidget } from './getMarkupForWidget';
import { refs } from './refs';

export const createDropdownList = e => {
  refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const inputValue = e.target.elements.input.value;

    getListOfCities(inputValue).then(data => {
      const markup = `<ul class="city__list">
      ${data}</ul>`;
      refs.wrapper.insertAdjacentHTML('afterbegin', markup);

      const li = document.querySelectorAll('.city__item');
      li.forEach(item =>
        item.addEventListener('click', e => {
          const cityName = e.target.textContent.split(' ').join('');
          getWidget(cityName).then(markup => {
            closeList();
            cleanWidget();

            refs.widget.insertAdjacentHTML('afterbegin', markup);
          });
        })
      );

      window.addEventListener('click', e => {
        if (e.target.nodeName === 'DIV' || e.target.nodeName === 'SECTION') {
          closeList();
        }
      });
    });
  });
};
