// Вибираємо елемент з класом "wrapper" і зберігаємо його у змінній "wrapper"
const wrapper = document.querySelector('.wrapper'); // Поправлено назву змінної

// Вибираємо елемент з класом "login-link" і зберігаємо його у змінній "loginLink"
const loginLink = document.querySelector('.login-link');

// Вибираємо елемент з класом "register-link" і зберігаємо його у змінній "registerLink"
const registerLink = document.querySelector('.register-link');

// Вибираємо елемент з класом "btnlogin-popup" і зберігаємо його у змінній "btnPopup"
const btnPopup = document.querySelector('.btnlogin-popup');

// Вибираємо елемент з класом "icon-close" і зберігаємо його у змінній "btnClose"
const btnClose = document.querySelector('.icon-close');

// Додаємо слухач події "click" до елемента "btnClose". При кліку на кнопку закриття, клас "active-popup" буде видалено з "wrapper", що заборонить показ вікна логіну/реєстрації
btnClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

// Додаємо слухач події "click" до елемента "btnPopup". При кліку на кнопку "login", додаємо клас "active-popup" до "wrapper", що активує вікно логіну/реєстрації
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

// Додаємо слухач події "click" до елемента "registerLink". При кліку на посилання "Register", додаємо клас "active" до "wrapper", що відображає вікно реєстрації
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Додаємо слухач події "click" до елемента "loginLink". При кліку на посилання "Login", видаляємо клас "active" з "wrapper", що закриває вікно реєстрації і повертає вікно логіну
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
