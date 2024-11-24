// NewTaskModal.js
import React from 'react';

const NewTaskModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Görev ekleme mantığı buraya gelecek
        onSubmit();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Yeni Görev Ekle</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Görev Adı" required />
                    <textarea placeholder="Açıklama" required></textarea>
                    <button type="submit">Ekle</button>
                </form>
            </div>
        </div>
    );
};

export default NewTaskModal;
