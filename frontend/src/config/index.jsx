
import axios from "axios";

// export const BASE_URL = "http://localhost:9080"
export const BASE_URL = "https://linkedin-replica.onrender.com/"

export const clientServer = axios.create({
    baseURL: BASE_URL,
});