import {CreateElement} from '../helper.js';
import ContactBear from '../pics/confused_bear.jpeg';

const contactLoad = function contactLoad() {
    const tabContainer = document.querySelector('.container');

    const titleNode = CreateElement('p','Contact Bears').newElement;
    tabContainer.innerHTML = titleNode.textContent;

    const contactBearImg = CreateElement('img').newElement;
    contactBearImg.src = ContactBear;
    tabContainer.appendChild(contactBearImg);
}

export default contactLoad;

