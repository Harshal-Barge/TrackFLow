import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";

const api = axios.create({ baseURL: API_BASE_URL })
const jwtToken = localStorage.getItem("jwt")

if (jwtToken) {
    api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
}
api.defaults.headers.post["Content-Type"] = "application/json"

export default api