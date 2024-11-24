// src/apiService.js
import axios from 'axios';
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        console.log('Interceptor Token:', token); // Token'ın varlığını kontrol edin
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default axios;