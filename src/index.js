import './sass/main.scss';
import menu from './menu.json';
import menuItemTpl from './partials/menuItems.hbs';


/* console.log(menuItemTpl(menu)); */

/* const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMarkup(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
function createMarkup(menu) {
    return menu.map(menuItemTpl).join('');
} */

menuContainer.insertAdjacentHTML('beforeend', menuItemTpl(menu));