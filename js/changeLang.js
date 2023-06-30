import { pt } from './language.js';
import { en } from './language.js';
import { es } from './language.js';

const btnPt = document.querySelector('#buttonPt');
const btnEn = document.querySelector('#buttonEn');
const btnEs = document.querySelector('#buttonEs');

function changeLanguage(lang) {
  const gameText = document.querySelectorAll('.game__text');
  const gameBtn = document.querySelectorAll('.btn');

  gameText.forEach((e) => (e.innerText = lang['gameContainer'][e.id]));
  gameBtn.forEach((e) => (e.innerText = lang['gameBtn'][e.id]));
}

btnPt.addEventListener('click', () => changeLanguage(pt));
btnEn.addEventListener('click', () => changeLanguage(en));
btnEs.addEventListener('click', () => changeLanguage(es));
