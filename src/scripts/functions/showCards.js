import Card from "https://evgeniyyaloza.github.io/src/scripts/classes/Card.js";

const showCards = async (cardsArray) => {
    const cardsContainer = document.querySelector('.container-cards');
    cardsContainer.innerText = "";
    const noCards = document.querySelector(".no-cards")
    if (cardsArray.length > 0) {
        noCards.classList.add("d-none")
    }
    const containerCards = document.querySelector(".container-cards")

    cardsArray.forEach((el) => {
        new Card(el).render(containerCards);
    });
}

export default showCards;
