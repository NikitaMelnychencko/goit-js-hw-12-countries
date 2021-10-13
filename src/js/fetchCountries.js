import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


export default function fetchCountries(searchQuery) {
 return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
   .then(response => {
      console.log(response);
      return response.json();
    })
   .catch(error => {
       const myError = notice({
          text: "Error 404.",
          modules: new Map([
            ...defaultModules,
            [PNotifyDesktop, {
            }]
          ])
       });

    });
}
// function renderCountry(country) {
//   if (country.length >= 2 && country.length <= 10) {
//         const markupList = listCountry(country);
//         refsRender.innerHTML = markupList;
//         const refsListCountry = document.querySelector('.country-list');
//         refsListCountry.addEventListener('click', targetValue);
//       } else if ((country.length === 1)) {
//         const markupCard = cardCountry(country);
//         refsRender.innerHTML = markupCard;
//       } else {
//         const myNotice = notice({
//           text: "Too many matches found. Please enter a mare specific query!",
//           modules: new Map([
//             ...defaultModules,
//             [PNotifyDesktop, {
//             }]
//           ])
//         });
//       }
// }
// function targetValue(e) {
//   if (e.target.nodeName !== 'LI') {
//     return;
//   }
//   refsInput.value = e.target.textContent;
//   fetchCountries(refsInput.value)
// }
