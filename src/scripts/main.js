import LoginModal from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/classes/LoginModal.js";
import {toggleBtn} from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/functions/toggleBtn.js";

const btnLogin = document.querySelector('.header__btn-login');

if (document.cookie.includes('token')) {
    toggleBtn();
} else {
    btnLogin.addEventListener('click', () => {
        new LoginModal().render();
    })
}



