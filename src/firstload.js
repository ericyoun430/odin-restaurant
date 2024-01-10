import './style.css';
import {mainElement, CreateElement} from './helper.js';


const firstLoad = function FirstLoad() {
    const header = CreateElement('div','','header').newElement;
    const headerTitle = CreateElement('span','Benu').newElement;
    header.appendChild(headerTitle);
    mainElement.doc.appendChild(header);
    
    const nav = CreateElement('nav').newElement;
    const ulNav = CreateElement('ul').newElement;
    const buttonAbout = CreateElement('button','about','about-tab').newElement;
    const buttonMenu = CreateElement('button','menu','menu-tab').newElement;
    const buttonContact = CreateElement('button','contact','contact-tab').newElement;
    const buttonReservations = CreateElement('button','reservations','reservations-tab').newElement;
    ulNav.appendChild(buttonAbout);
    ulNav.appendChild(buttonMenu);
    ulNav.appendChild(buttonContact);
    ulNav.appendChild(buttonReservations);
    nav.appendChild(ulNav);
    mainElement.doc.appendChild(nav);

    const tabContainer = CreateElement('div','','container').newElement;
    mainElement.doc.appendChild(tabContainer);
    
    // const bearImg = CreateElement('img').newElement;
    // bearImg.setAttribute('src',BearIcon);
    // mainElement.doc.appendChild(bearImg);
}

export default firstLoad;