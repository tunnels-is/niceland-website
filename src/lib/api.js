import STORE from "../store";
import axios from "axios";

const CLIENT = axios.create({
    baseURL: STORE.Config.CLIENT,
    timeout: STORE.Config.APITimeout,
    headers: STORE.Config.HEADERS,
})



export {
    CLIENT,
}
