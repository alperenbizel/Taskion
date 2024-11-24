// NewNoteModal.js
import React from 'react';

const NewNoteModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Not ekleme mantığı buraya gelecek
        onSubmit();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Yeni Not Ekle</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Not Başlığı" required />
                    <textarea placeholder="Not İçeriği" required></textarea>
                    <button type="submit">Ekle</button>
                </form>
            </div>
        </div>
    );
};

export default NewNoteModal;
