const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.Login-link'); // Correct case
const RegisterLink = document.querySelector('.Register-link'); // Correct case
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

RegisterLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});