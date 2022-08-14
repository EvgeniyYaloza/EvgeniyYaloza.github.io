import LoginModal from "https://evgeniyyaloza.github.io/src/scripts/classes/LoginModal.js";
import {toggleBtn} from "https://evgeniyyaloza.github.io/src/scripts/functions/toggleBtn.js";

const btnLogin = document.querySelector('.header__btn-login');

if (document.cookie.includes('token')) {
    toggleBtn();
} else {
    btnLogin.addEventListener('click', () => {
        new LoginModal().render();
    })
}



