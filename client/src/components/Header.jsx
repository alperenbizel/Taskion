import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewTaskModal from './NewTaskModal';
import NewNoteModal from './NewNoteModal';
import './css/Header.css'; // CSS dosyasını içe aktar

function Header() {
    const [isTaskModalOpen, setTaskModalOpen] = useState(false);
    const [isNoteModalOpen, setNoteModalOpen] = useState(false);

    const openNewTaskModal = () => setTaskModalOpen(true);
    const closeNewTaskModal = () => setTaskModalOpen(false);
    const openNewNoteModal = () => setNoteModalOpen(true);
    const closeNewNoteModal = () => setNoteModalOpen(false);

    return (
        <header className="header-container">
            <div className="logo">
                <Link to="/">My Project</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/projects">Projeler</Link>
                    </li>
                    <li>
                    <Link to="/profile">Profil</Link>
                    </li>
                </ul>
            </nav>
 
      
            <div className="button-container">
                <button className="header-button" onClick={openNewTaskModal}>Yeni Görev Ekle</button>
                <button className="header-button" onClick={openNewNoteModal}>Yeni Not Ekle</button>
            </div>

            <NewTaskModal isOpen={isTaskModalOpen} onClose={closeNewTaskModal} onSubmit={closeNewTaskModal} />
            <NewNoteModal isOpen={isNoteModalOpen} onClose={closeNewNoteModal} onSubmit={closeNewNoteModal} />
     
         </header>
    );
}

export default Header;
