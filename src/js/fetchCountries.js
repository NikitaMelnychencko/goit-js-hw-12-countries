import { notice, defaultModules } from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => {
      if (response.status !== 404) {
        return response.json();
      }
    })
    .catch(error => {
      const myError = notice({
        text: 'Error 404.',
        modules: new Map([...defaultModules, [PNotifyDesktop, {}]]),
      });
    });
}
