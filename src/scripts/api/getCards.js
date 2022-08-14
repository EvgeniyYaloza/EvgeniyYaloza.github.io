import instance from "https://evgeniyyaloza.github.io/src/scripts/api/instance.js"

const getCards = async () => {
    try {
        const { status, data } = await instance.get('');
        if (status === 200) {
            return data;
        } else {
            console.warn(status, data)
        }
    } catch (err) {
        console.error(err);
    }
}

export default getCards;
