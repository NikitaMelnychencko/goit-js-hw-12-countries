import fetchCountries from './fetchCountries';
import listCountry from '../layouts/list-country.hbs';
import cardCountry from '../layouts/card-country.hbs';
import { notice, defaultModules } from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
const debounce = require('lodash.debounce');

const refsInput = document.querySelector('input');
const refsRender = document.querySelector('.render');

refsInput.addEventListener(
  'input',
  debounce(e => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      fetchCountries(e.target.value)
        .then(renderCountry)
        .catch(error => {
          const myError = notice({
            text: 'Error 404.',
            modules: new Map([...defaultModules, [PNotifyDesktop, {}]]),
          });
        });
    }
  }, 500),
);

function renderCountry(country) {
  if (country.length >= 2 && country.length <= 10) {
    const markupList = listCountry(country);
    refsRender.innerHTML = markupList;
    const refsListCountry = document.querySelector('.country-list');
    refsListCountry.addEventListener('click', targetValue);
  } else if (country.length === 1) {
    const markupCard = cardCountry(country);
    refsRender.innerHTML = markupCard;
  } else if (country.length > 10) {
    const myNotice = notice({
      text: 'Too many matches found. Please enter a mare specific query!',
      modules: new Map([...defaultModules, [PNotifyDesktop, {}]]),
    });
  }
  return
}
function targetValue(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  refsInput.value = e.target.textContent;
  fetchCountries(refsInput.value).then(renderCountry);
}
