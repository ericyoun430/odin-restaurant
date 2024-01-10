import firstLoad from './firstload.js';
import aboutLoad from './nav-tabs/about.js';
import contactLoad from './nav-tabs/contact.js';
import menuLoad from './nav-tabs/menu.js';
import reservationLoad from './nav-tabs/reservation.js';

//loads first
firstLoad();

//tab pages
const aboutTab = document.querySelector('.about-tab')
                         .addEventListener('click', ()=> {
    aboutLoad();
})

const menuTab = document.querySelector('.menu-tab')
                         .addEventListener('click', ()=> {
    menuLoad();
})

const contactTab = document.querySelector('.contact-tab')
                         .addEventListener('click', ()=> {
    contactLoad();
})

const reservationTab = document.querySelector('.reservations-tab')
                         .addEventListener('click', ()=> {
    reservationLoad();
})