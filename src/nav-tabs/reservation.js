import {CreateElement} from '../helper.js';
import ReservationBear from '../pics/bear_restaurant.jpeg';

const reservationLoad = function AboutLoad() {
    const tabContainer = document.querySelector('.container');

    const titleNode = CreateElement('p','Menu Bears').newElement;
    tabContainer.innerHTML = titleNode.textContent;

    const reservationBearImg = CreateElement('img').newElement;
    reservationBearImg.src = ReservationBear;
    tabContainer.appendChild(reservationBearImg);
}

export default reservationLoad;

