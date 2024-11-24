import axios from 'axios';

const FileService = {
    uploadFile: async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post('http://localhost:5000/api/files/upload', formData);
        return response.data;
    },
    getFiles: async () => {
        const response = await axios.get('http://localhost:5000/api/files');
        return response.data;
    },
    deleteFile: async (id) => {
        await axios.delete(`http://localhost:5000/api/files/${id}`);
    }
};

export default FileService;
