import fetchCountries from './fetchCountries'
const debounce = require('lodash.debounce');


const refsInput = document.querySelector('input')

refsInput.addEventListener('input', e => {
  e.preventDefault();
  const value = e.currentTarget.value
  const result = fetchCountries(value)
}
)
