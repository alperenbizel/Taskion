import axios from 'axios';

const TaskService = {
    getTasks: async (projectId) => {
        const response = await axios.get(`http://localhost:5000/api/tasks/${projectId}`);
        return response.data;
    },
    deleteTask: async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    },
    createTask: async (data) => {
        const response = await axios.post('http://localhost:5000/api/tasks', data);
        return response.data;
    },
    updateTask: async (id, data) => {
        const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, data);
        return response.data; // Güncelleme sonrası döndürülen veriyi al
    }
};

export default TaskService;
