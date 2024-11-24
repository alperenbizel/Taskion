import axios from 'axios';

const ActivityService = {
    getActivities: async () => {
        const response = await axios.get('http://localhost:5000/api/activities');
        return response.data;
    },
    createActivity: async (data) => {
        const response = await axios.post('http://localhost:5000/api/activities', data);
        return response.data;
    }
};

export default ActivityService;
