import React, { useState } from 'react';
import NoteService from '../services/NoteService';

function AddNoteForm({ projectId, onNoteAdded }) {
    const [noteContent, setNoteContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!noteContent.trim()) {
            setError('Not içeriği zorunludur');
            return;
        }

        try {
            const newNote = {
                title: noteContent,
                project: projectId,
            };
            await NoteService.createNote(newNote);
            onNoteAdded(); // Yeni not eklendiğinde proje detaylarını yeniden yükleyin
            setNoteContent('');
            setError('');
        } catch (error) {
            setError('Not eklenirken bir hata oluştu');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Yeni Not Ekle</h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <textarea
                    placeholder="Not İçeriği"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
}

export default AddNoteForm;
