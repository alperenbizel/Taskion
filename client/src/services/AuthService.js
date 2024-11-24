import axios from 'axios';

const AuthService = {
    login: async (email, password) => {
        const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
        const token =response.data.token;
        localStorage.setItem('token',token)
        return response.data;
    },
    register: async (name, email, password) => { 
        const response = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
        return response.data;
    }
};

export default AuthService;
