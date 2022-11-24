import { closeList } from './js/closeList';
import { getListOfCities } from './js/getListOfCities';
import { refs } from './js/refs';

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const inputValue = e.target.elements.input.value;

  getListOfCities(inputValue).then(data => {
    const markup = `<ul class="city__list">
    ${data}</ul>`;
    refs.wrapper.insertAdjacentHTML('afterbegin', markup);
    const list = document.querySelector('.city__list');

    window.addEventListener('click', e => {
      if (e.target.nodeName === 'DIV' || e.target.nodeName === 'SECTION') {
        closeList();
      }
    });
  });
});
