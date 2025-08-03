
import axios from 'axios';

const api = axios.create({
  baseURL: "https://ashy-pebble-0f016711e.2.azurestaticapps.net",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/'; // Redirige a la página de login
    }
    return Promise.reject(error);
  }
);

export default api;
