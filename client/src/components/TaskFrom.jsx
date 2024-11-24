

import React, { useState } from 'react';
import TaskService from '../services/TaskService';

function AddTaskForm({ projectId, onTaskAdded }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('To Do'); // Varsayılan durum
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dueDate) {
            setError('Görev tarihi zorunludur');
            return;
        }

        try {
            const newTask = {
                title: taskTitle,
                description: taskDescription,
                dueDate,
                status, // Durum alanı eklendi
                project: projectId,
            };
            await TaskService.createTask(newTask);
            onTaskAdded();
            setTaskTitle('');
            setTaskDescription('');
            setDueDate('');
            setStatus('pending'); // Varsayılan durumu sıfırla
            setError('');
        } catch (error) {
            setError('Görev eklenirken bir hata oluştu');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Yeni Görev Ekle</h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input
                    type="text"
                    placeholder="Görev Adı"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Görev Açıklaması"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    required
                ></textarea>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
}


export default AddTaskForm;

