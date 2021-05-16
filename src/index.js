import menuCards from './menu.json';
import menuCardTpl from './templates/eat-card.hbs';

const menuEl = document.querySelector('.js-menu'); // список
const switchOfTheme = document.querySelector('.theme-switch__toggle'); // перемикач теми
const bodyEl = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('Theme'); // читаємо сховище

if (savedTheme) {
    bodyEl.classList.add(savedTheme); // використовуємо збережену тему
    if (savedTheme === Theme.DARK)
        switchOfTheme.checked = true; // виставлення перемикача в потрібне положення
}

const menuMarkup = createMenuMarkup(menuCards); // створення розмітки карток

menuEl.insertAdjacentHTML('beforeend', menuMarkup); // вставка розмітки

function createMenuMarkup(cards) {
    return cards.map(menuCardTpl).join('');
}

switchOfTheme.addEventListener('change', changeOfTheme); // слухач на перемикач

function changeOfTheme() {
    if (!bodyEl.classList.contains(Theme.DARK)) {
        manipulations(Theme.DARK, Theme.LIGHT);
    } else {
        manipulations(Theme.LIGHT, Theme.DARK);
    }
}

function manipulations(toAdd, toRemove) {
    bodyEl.classList.add(toAdd);
    bodyEl.classList.remove(toRemove);
    localStorage.setItem('Theme', toAdd);
}