import Filter from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/classes/Filter.js";
import getCards from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/api/getCards.js";
import showCards from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/functions/showCards.js";
import {
    handleDragEnd,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDragStart,
    handleDrop
} from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/functions/handleDrags.js";
import VisitModal from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/classes/VisitModal.js";
import createVisit from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/api/createVisit.js";

export const renderMainContent = () => {
    const formContainer = document.querySelector('.container-filter');
    const btnCreateVisit = document.querySelector('.header__btn-createVisit');

    btnCreateVisit.addEventListener('click', () => {
        new VisitModal(createVisit, "create").render();
    })

    new Filter(formContainer).render();

    (async () => {
        const cardsArray = await getCards();
        showCards(cardsArray);
    })();

    const cardsContainer = document.querySelector('.container-cards');

    cardsContainer.addEventListener('mousedown', (e) => {
        document.querySelectorAll('.cards__card').forEach(card => {
            card.addEventListener('dragstart', handleDragStart);
            card.addEventListener('dragover', handleDragOver);
            card.addEventListener('dragenter', handleDragEnter);
            card.addEventListener('dragleave', handleDragLeave);
            card.addEventListener('dragend', handleDragEnd);
            card.addEventListener('drop', handleDrop);
        });
    });

}

