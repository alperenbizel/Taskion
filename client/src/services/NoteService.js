import axios from 'axios';

const NoteService = {
    getNotes: async () => {
        const response = await axios.get('http://localhost:5000/api/notes');
        return response.data;
    },
    deleteNote: async (id) => {
        await axios.delete(`/api/notes/${id}`);
    },
    createNote: async (data) => {
        const response = await axios.post('http://localhost:5000/api/notes', data);
        return response.data;
    },
    updateNote: async (id, data) => {
        const response = await axios.put(`http://localhost:5000/api/notes/${id}`, data);
        return response.data;
    }
};

export default NoteService;
