import instance from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/api/instance.js";
import Card from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/classes/Card.js";

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
