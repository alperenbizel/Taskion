import React, { useEffect, useState } from 'react';
import ActivityService from '../services/ActivityService';
import List from '../components/List';
import Header from '../components/Header';

const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const data = await ActivityService.getActivities();
                setActivities(data);
            } catch (err) {
                setError('Aktiviteler alınamadı!');
            }
        };

        fetchActivities();
    }, []);

    return (
        <div>
            <Header />
            <h2>Aktiviteler</h2>
            {error && <p>{error}</p>}
            <List items={activities} />
        </div>
    );
};

export default ActivitiesPage;