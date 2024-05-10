import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// Request interceptor
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_TOKEN}`;
    return config;
})

// Response interceptor
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.log(401);
                return;
            }
            if (error.response.status === 404) {
                //
            }
        }
        return Promise.reject(error);
    },
);