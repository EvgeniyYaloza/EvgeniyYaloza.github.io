import {renderMainContent} from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/functions/renderMainContent.js";


export function toggleBtn(){
    const btnLogin = document.querySelector('.header__btn-login');
    const btnCreateVisit = document.querySelector('.header__btn-createVisit');
    btnLogin.classList.add('none');
    btnCreateVisit.classList.remove('none');
    renderMainContent();
}
