import { history } from '#/const';

export function scrollToTopAndRoute(path: string) {
  window.scrollTo({
    top: 0,
    //see firefox doc
    // behavior: 'smooth',
  });
  setTimeout(() => {
    history.push(path);
  }, 0);
}
