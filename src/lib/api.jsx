import axios from "axios";
import STORE from "../store";

const CLIENT = axios.create({
	baseURL: STORE.Config.CLIENT,
	timeout: STORE.Config.APITimeout,
	headers: STORE.Config.HEADERS,
})

export {
	CLIENT,
}
