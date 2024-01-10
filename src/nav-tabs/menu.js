import {CreateElement} from '../helper.js';
import MenuBear from '../pics/bear_menu.jpeg';

const menuLoad = function AboutLoad() {
    const tabContainer = document.querySelector('.container');

    const titleNode = CreateElement('p','Menu Bears').newElement;
    tabContainer.innerHTML = titleNode.textContent;

    const menuBearImg = CreateElement('img').newElement;
    menuBearImg.src = MenuBear;
    tabContainer.appendChild(menuBearImg);
}

export default menuLoad;

