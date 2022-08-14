import instance from "https://evgeniyyaloza.github.io/src/scripts/api/instance.js";
import Card from "https://evgeniyyaloza.github.io/src/scripts/classes/Card.js";

const createVisit = async (visit) => {
	const { body } = visit;
	try {
		const { status, data } = await instance.post('', body);
		if (status === 200) {
			visit.closeModal();
			new Card(data).render(document.querySelector(".container-cards"));
		}
	}
	catch (err) {
		alert("Упс... Что-то пошло не так!");
		console.error(err);
	}
}

export default createVisit;
