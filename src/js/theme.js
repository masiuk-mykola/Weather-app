import { refs } from './refs';

export const theme = () => {
  const now = new Date().getHours();
  if (now >= 6 && now <= 21) {
    refs.hero.classList.remove('night');
    refs.formBtn.classList.remove('night');
    refs.cityItem.forEach(item => item.classList.remove('night'));
  } else {
    refs.hero.classList.add('night');
    refs.formBtn.classList.add('night');
    refs.cityItem.forEach(item => item.classList.add('night'));
  }
};
