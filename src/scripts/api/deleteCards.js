import instance from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/api/instance.js";

const deleteCards = async (id) => {
    try {
        const { status } = await instance.delete(`/${id}`);
        if (status === 200) {
            document.querySelector(`#card-${id}`).remove();
        } else {
            console.warn(status)
        }
    } catch (err) {
        console.error(err);
    }
}

export default deleteCards;
