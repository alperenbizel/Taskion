import axios from 'axios';

const UserService = {
    getProfile: async () => {
        const token = localStorage.getItem('token'); // Token'ı localStorage'dan alın
        const response = await axios.get('http://localhost:5000/api/users/profile', {
            headers: {
                Authorization: `Bearer ${token}`, // Token'ı Authorization başlığına ekleyin
            },
        });
        return response.data;
    },
    updateProfile: async (data) => {
        const token = localStorage.getItem('token');
        const response = await axios.put('http://localhost:5000/api/users/profile', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },
};

export default UserService;
