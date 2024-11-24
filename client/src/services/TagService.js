import axios from 'axios';

const TagService = {
    getTags: async () => {
        const response = await axios.get('http://localhost:5000/api/tags');
        return response.data;
    },
    createTag: async (data) => {
        const response = await axios.post('http://localhost:5000/api/tags', data);
        return response.data;
    },
    deleteTag: async (id) => {
        await axios.delete(`http://localhost:5000/api/tags/${id}`);
    }
};

export default TagService;
