
import React from 'react';
import './css/TaskCard.css'
function TaskCard({ task, onStatusChange, onEdit, onDelete }) {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>Açıklama: {task.description}</p>
            <p>Durum: {task.status}</p>
            <p>Teslim Tarihi: {new Date(task.dueDate).toLocaleDateString()}</p>
            <button onClick={() => onStatusChange(task)}>Durumu Güncelle</button>
            <button onClick={() => onEdit(task)}>Düzenle</button>
            <button onClick={() => onDelete(task._id)}>Sil</button>
        </div>
    );
}

export default TaskCard;
