import { createMedia } from '@artsy/fresnel';
import { createBrowserHistory } from 'history';

export const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export const history = createBrowserHistory();
