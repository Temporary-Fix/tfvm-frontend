//Configure axios for sessions and csrf
import axios from 'axios'
delete axios.defaults.headers["www-authenticate"];
delete axios.defaults.headers["WWW-Authenticate"];
delete axios.defaults.headers.common["WWW-Authenticate"];
delete axios.defaults.headers.common["www-authenticate"];
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

//Here for intercepting requests if needed
axiosInstance.interceptors.request.use(
    request => {

        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

//Here for intercepting requests if needed
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
