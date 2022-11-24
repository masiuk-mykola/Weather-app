import { refs } from './refs';

export const changeFooterYear = () => {
  const year = new Date().getFullYear();
  const markup = `<span class="footer__year"> ${year}</span>`;
  refs.footerYear.insertAdjacentHTML('beforeend', markup);
};
