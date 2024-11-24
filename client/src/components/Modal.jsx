import React from 'react';
import './css/Modal.css'
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>Kapat</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
