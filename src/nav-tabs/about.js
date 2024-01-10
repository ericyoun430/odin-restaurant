import {CreateElement} from '../helper.js';
import AboutBear from '../pics/bear_pic.jpeg';

const aboutLoad = function AboutLoad() {
    const tabContainer = document.querySelector('.container');

    const titleNode = CreateElement('p','About Bears').newElement;
    tabContainer.innerHTML = titleNode.textContent;

    const aboutBearImg = CreateElement('img').newElement;
    aboutBearImg.src = AboutBear;
    tabContainer.appendChild(aboutBearImg);
}

export default aboutLoad;

