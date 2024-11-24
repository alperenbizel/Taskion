import React, { useEffect, useState } from 'react';
import SharingService from '../services/SharingService';
import List from '../components/List';
import Header from '../components/Header';

const SharedItemsPage = () => {
    const [sharedItems, setSharedItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSharedItems = async () => {
            try {
                const data = await SharingService.getSharedItems();
                setSharedItems(data);
            } catch (err) {
                setError('Paylaşılan öğeler alınamadı!');
            }
        };

        fetchSharedItems();
    }, []);

    return (
        <div>
            <Header />
            <h2>Paylaşılan Öğeler</h2>
            {error && <p>{error}</p>}
            <List items={sharedItems} />
        </div>
    );
};

export default SharedItemsPage;
