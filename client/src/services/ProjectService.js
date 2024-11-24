import axios from 'axios';

const ProjectService = {
    getProjects: async () => {
        const response = await axios.get('http://localhost:5000/api/projects');
        return response.data;
    },
    deleteProject: async (id) => {
      axios.delete(`http://localhost:5000/api/projects/${id}`);
    },
    createProject: async (data) => {
        const response = await axios.post('http://localhost:5000/api/projects', data);
        return response.data;
    },
    updateProject: async (id, data) => {
        const response = await axios.put(`http://localhost:5000/api/projects/${id}`, data);
        return response.data;
    },
    getProjectById: async (id) => {
           const token = localStorage.getItem('token'); // Token'ı local storage'dan al
    try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Token'ı başlığa ekle
            },
        });
        return response.data;
        } catch (error) {
            console.error("API Hatası:", error.response ? error.response.data : error.message);
            throw error; // Hatanın dışarıya iletilmesi
        }
    }
    
};

export default ProjectService;

// import axios from './apiService'; // Axios'u kendi interceptor'ınız ile import edin

// const ProjectService = {
//     getProjects: async () => {
//         const response = await axios.get('http://localhost:5000/api/projects');
//         return response.data;
//     },
//     deleteProject: async (id) => {
//         await axios.delete(`http://localhost:5000/api/projects/${id}`);
//     },
//     createProject: async (data) => {
//         const response = await axios.post('http://localhost:5000/api/projects', data);
//         return response.data;
//     },
//     updateProject: async (id, data) => {
//         const response = await axios.put(`http://localhost:5000/api/projects/${id}`, data);
//         return response.data;
//     },
//     getProjectById: async (id) => {
//         try {
//             const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
//             return response.data;
//         } catch (error) {
//             console.error("API Hatası:", error.response ? error.response.data : error.message);
//             throw error; // Hatanın dışarıya iletilmesi
//         }
//     }
// };

// export default ProjectService;
