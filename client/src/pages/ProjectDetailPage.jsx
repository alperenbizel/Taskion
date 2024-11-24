import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectService from '../services/ProjectService';
import TaskService from '../services/TaskService';
import NoteService from '../services/NoteService';
import TaskCard from '../components/TaskCard';
import NoteCard from '../components/NoteCard';
import AddTaskForm from '../components/TaskFrom';
import AddNoteForm from '../components/AddNoteForm';
import Modal from '../components/Modal';

function ProjectDetailPage() {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isTaskModalOpen, setTaskModalOpen] = useState(false);
    const [isNoteModalOpen, setNoteModalOpen] = useState(false);

    const fetchProjectDetail = async () => {
        try {
            const projectData = await ProjectService.getProjectById(projectId);
            if (projectData) {
                setProject(projectData);
                setTasks(projectData.tasks || []);
                setNotes(projectData.notes || []);
            } else {
                setError('Proje verileri alınamadı.');
            }
        } catch (error) {
            setError('Proje detayları yüklenirken bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (projectId) {
            fetchProjectDetail();
        } else {
            setError('Geçerli bir proje ID sağlanmadı.');
            setLoading(false);
        }
    }, [projectId]);

    const handleTaskModalOpen = () => setTaskModalOpen(true);
    const handleTaskModalClose = () => setTaskModalOpen(false);
    
    const handleNoteModalOpen = () => setNoteModalOpen(true);
    const handleNoteModalClose = () => setNoteModalOpen(false);

    const handleTaskDelete = async (taskId) => {
        try {
            await TaskService.deleteTask(taskId);
            fetchProjectDetail();
        } catch (error) {
            setError('Görev silinirken bir hata oluştu.');
        }
    };

    const handleNoteDelete = async (noteId) => {
        try {
            await NoteService.deleteNote(noteId);
            fetchProjectDetail();
        } catch (error) {
            setError('Not silinirken bir hata oluştu.');
        }
    };

    const handleTaskStatusChange = async (task) => {
        try {
            const updatedTask = { ...task, status: task.status === 'Done' ? 'To Do' : 'Done' };
            await TaskService.updateTask(task._id, updatedTask);
            fetchProjectDetail();
        } catch (error) {
            setError('Görev durumu güncellenirken bir hata oluştu.');
        }
    };

    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            {project ? (
                <>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <button onClick={handleTaskModalOpen}>Yeni Görev Ekle</button>
                    <button onClick={handleNoteModalOpen}>Yeni Not Ekle</button>
                    
                    {/* Modal for Adding Task */}
                    <Modal isOpen={isTaskModalOpen} onClose={handleTaskModalClose}>
                        <AddTaskForm projectId={projectId} onTaskAdded={() => { fetchProjectDetail(); handleTaskModalClose(); }} />
                    </Modal>

                    {/* Modal for Adding Note */}
                    <Modal isOpen={isNoteModalOpen} onClose={handleNoteModalClose}>
                        <AddNoteForm projectId={projectId} onNoteAdded={() => { fetchProjectDetail(); handleNoteModalClose(); }} />
                    </Modal>

                    <h3>Görevler</h3>
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <TaskCard
                                key={task._id}
                                task={task}
                                onStatusChange={handleTaskStatusChange}
                                onDelete={handleTaskDelete}
                                onEdit={() => console.log('Görev düzenleme işlevi henüz eklenmedi')}
                            />
                        ))
                    ) : (
                        <p>Görev bulunamadı.</p>
                    )}
                    <h3>Notlar</h3>
                    {notes.length > 0 ? (
                        notes.map((note) => (
                            <NoteCard
                                key={note._id}
                                note={note}
                                onDelete={handleNoteDelete}
                            />
                        ))
                    ) : (
                        <p>Not bulunamadı.</p>
                    )}
                </>
            ) : (
                <p>Proje bulunamadı.</p>
            )}
        </div>
    );
}

export default ProjectDetailPage;
