import { refs } from './refs';

export function closeList() {
  refs.wrapper.innerHTML = '';
  refs.input.value = '';
}
