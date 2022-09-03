import axios from "axios";

export const API = axios.create({
    baseURL: 'http://34.132.94.119:8080'
})
export default API;
