import {setCookie} from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/utils/cookiehelpers.js";
import instance from "https://github.com/EvgeniyYaloza/EvgeniyYaloza.github.io/blob/main/src/scripts/api/instance.js"

const login = async (email, password) => {
    try {
        const {status, data} = await instance.post('/login', {email: email, password: password});
        if (status === 200) {
            sessionStorage.setItem("key","value");
            setCookie('token', data);
            return status;
        }
    } catch (err) {
        console.error(err);
    }
}


export default login;
