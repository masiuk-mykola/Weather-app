import { changeFooterYear } from './js/changeFooterYear';
import { cleanWidget } from './js/cleanWidget';
import { closeList } from './js/closeList';
import { getListOfCities } from './js/getListOfCities';
import { getWidget } from './js/getWidget';
import { refs } from './js/refs';
import { scrollToTop } from './js/scrollToTop';

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

changeFooterYear();

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
