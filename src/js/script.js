'use strict'

const ham = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close'),
    counters = document.querySelectorAll('.work__progress-percentage'),
    lines = document.querySelectorAll('.work__progress-frontbar');


ham.addEventListener('click', () => menu.classList.add('active'));
close.addEventListener('click', () => menu.classList.remove('active'));

counters.forEach((item, i) => {
    lines[i].style.width = item.textContent
});