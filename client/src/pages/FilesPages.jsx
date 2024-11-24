import React, { useEffect, useState } from 'react';
import FileService from '../services/FileService';
import List from '../components/List';
import Header from '../components/Header';

const FilesPage = () => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const data = await FileService.getFiles();
                setFiles(data);
            } catch (err) {
                setError('Dosyalar alınamadı!');
            }
        };

        fetchFiles();
    }, []);

    const handleDelete = async (id) => {
        try {
            await FileService.deleteFile(id);
            setFiles(files.filter(file => file.id !== id));
        } catch (err) {
            setError('Dosya silinemedi!');
        }
    };

    return (
        <div>
            <Header />
            <h2>Dosyalar</h2>
            {error && <p>{error}</p>}
            <List items={files} onDelete={handleDelete} />
        </div>
    );
};

export default FilesPage;
