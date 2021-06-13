import './sass/main.scss';
import menu from './menu.json';
import menuItemTpl from './partials/menuItems.hbs';

/* const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMarkup(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
function createMarkup(menu) {
    return menu.map(menuItemTpl).join('');
} */

const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('beforeend', menuItemTpl(menu));

/* Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
Для удобства хранения списка тем используй такое перечисление. */

/* const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}; */

const toggle = document.querySelector('#theme-switch-toggle');

toggle.addEventListener('change', (e) => {
    e.preventDefault();
  
    if (localStorage.getItem('theme') === 'dark-theme') {
        localStorage.setItem('theme', 'light-theme');
    }
    else {
        localStorage.setItem('theme', 'dark-theme');
    }
    setDarkTheme();
});

function setDarkTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        document.querySelector('body').classList.add('dark-theme');
        toggle.setAttribute('checked', true);
    }
    else {
        document.querySelector('body').classList.remove('dark-theme');
    }
}
setDarkTheme();