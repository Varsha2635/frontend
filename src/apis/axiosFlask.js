import axios from 'axios';

const axiosFlask = axios.create({
  baseURL: 'http://localhost:5000/api', // Flask ML backend
});

axiosFlask.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosFlask;
