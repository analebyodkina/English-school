import mobileNav from './modules/mobile-nav.js';
mobileNav();

import checkSpinner from './modules/spinner.js';
checkSpinner();

// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init();

// copyright
var currentYear = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = currentYear;





