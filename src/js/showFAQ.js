import { refs } from './refs';

export const showFAQ = () => {
  refs.faq.forEach(item => item.addEventListener('click', toggleReadMore));
};

const toggleReadMore = e => {
  if (e.target.nodeName === 'use' || e.target.nodeName === 'svg') {
    return;
  }
  const svg = e.target.nextElementSibling;
  svg.classList.toggle('rotate');

  const text = e.currentTarget.nextElementSibling;
  text.classList.toggle('hidden');
};
