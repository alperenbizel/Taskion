import axios from 'axios';

const SharingService = {
    shareItem: async (itemId, userId) => {
        const response = await axios.post(`http://localhost:5000/api/share`, { itemId, userId });
        return response.data;
    },
    getSharedItems: async () => {
        const response = await axios.get('http://localhost:5000/api/shared-items');
        return response.data;
    }
};

export default SharingService;
