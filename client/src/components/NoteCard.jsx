import React from 'react';
import './css/NoteCard.css'
function NoteCard({ note, onDelete }) {
    return (
        <div className="note-card">
            <p>{note.title}</p>
            <button onClick={() => onDelete(note._id)}>Sil</button>
        </div>
    );
}

export default NoteCard;
