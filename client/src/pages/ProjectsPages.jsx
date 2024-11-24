// import React, { useState, useEffect } from 'react';
// import ProjectService from '../services/ProjectService';
// import ProjectCard from '../components/ProjectCard';
// import { useNavigate } from 'react-router-dom';
// import Modal from '../components/Modal'
// function ProjectsPages() {
//     const [projects, setProject] = useState([]);
//     const [projectName, setProjectName] = useState(''); // Başlangıç değeri boş string
//     const [projectDescription, setProjectDescription] = useState(''); // Başlangıç değeri boş string
//     const [editingProjectId, setEditingProjectId] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const navigate= useNavigate();

//     useEffect(() => {
//         const fetchproject = async () => {
//             const data = await ProjectService.getProjects();
//             setProject(data);
//         }
//         fetchproject();
//     }, []);
    


//     const handleDelete = async (id) => {
//         await ProjectService.deleteProject(id);
//         setProject(projects.filter((project) => project._id !== id));
//     }

//     const handleCreateProject = async (e) => {
//         e.preventDefault();
//         const newProject = { name: projectName, description: projectDescription };
//         const createdProject = await ProjectService.createProject(newProject);
//         setProject([...projects, createdProject]);
//         resetForm();
//     }

//     const handleEdit = (project) => {
//         setEditingProjectId(project._id);
//         setProjectName(project.name); 
//         setProjectDescription(project.description); 
//         setIsEditing(true); 
//     }

//     const handleUpdateProject = async (e) => {
//         e.preventDefault();
//         const updatedProject = { name: projectName, description: projectDescription };
//         const projectId = editingProjectId;
//         await ProjectService.updateProject(projectId, updatedProject);
//         setProject(projects.map((project) => (project._id === projectId ? { ...project, ...updatedProject } : project)));
//         resetForm();
//     }

//     const resetForm = () => {
//         setProjectName(''); // Formu sıfırla
//         setProjectDescription(''); // Formu sıfırla
//         setEditingProjectId(null);
//         setIsEditing(false);
//     }
// const handleViewDetails=(id)=>{
//     navigate(`/projects/${id}`);

// }

//     return (
//         <div>
//             <h2>Projeler</h2>
//             <form onSubmit={isEditing ? handleUpdateProject : handleCreateProject}>
//                 <input
//                     type="text"
//                     placeholder="Proje Adı"
//                     value={projectName}
//                     onChange={(e) => setProjectName(e.target.value)} // Proje ismini güncelle
//                     required
//                 />
//                 <textarea 
//                     placeholder="Proje Açıklaması"
//                     value={projectDescription}
//                     onChange={(e) => setProjectDescription(e.target.value)} // Proje açıklamasını güncelle
//                     required
//                 />
//                 <button type="submit">{isEditing ? 'Proje Güncelle' : 'Proje Oluştur'}</button>
//             </form>

//             <div className='project-list'>
//                 {projects.map((project) => (
//                     <ProjectCard
//                         key={project._id}
//                         project={project}
//                         onEdit={handleEdit} 
//                         onDelete={handleDelete}
//                         onViewDetails={handleViewDetails}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ProjectsPages;

import React, { useState, useEffect } from 'react';
import ProjectService from '../services/ProjectService';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

function ProjectsPages() {
    const [projects, setProject] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal durumu
    const [projectName, setProjectName] = useState(''); // Başlangıç değeri boş string
    const [projectDescription, setProjectDescription] = useState(''); // Başlangıç değeri boş string
    const [editingProjectId, setEditingProjectId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await ProjectService.getProjects();
            setProject(data);
        }
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        await ProjectService.deleteProject(id);
        setProject(projects.filter((project) => project._id !== id));
    }

    const handleOpenModal = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        resetForm();
        setIsModalOpen(false);
    };

    const handleCreateProject = async (e) => {
        e.preventDefault();
        const newProject = { name: projectName, description: projectDescription };
        const createdProject = await ProjectService.createProject(newProject);
        setProject([...projects, createdProject]);
        handleCloseModal(); // Modalı kapat
    }

    const handleEdit = (project) => {
        setEditingProjectId(project._id);
        setProjectName(project.name); 
        setProjectDescription(project.description); 
        setIsEditing(true); 
        setIsModalOpen(true); // Modalı aç
    }

    const handleUpdateProject = async (e) => {
        e.preventDefault();
        const updatedProject = { name: projectName, description: projectDescription };
        const projectId = editingProjectId;
        await ProjectService.updateProject(projectId, updatedProject);
        setProject(projects.map((project) => (project._id === projectId ? { ...project, ...updatedProject } : project)));
        handleCloseModal(); // Modalı kapat
    }

    const resetForm = () => {
        setProjectName(''); // Formu sıfırla
        setProjectDescription(''); // Formu sıfırla
        setEditingProjectId(null);
        setIsEditing(false);
    }

    const handleViewDetails = (id) => {
        navigate(`/projects/${id}`);
    }

    return (
        <div>
            <h2>Projeler</h2>
            <button onClick={handleOpenModal}>Yeni Proje Ekle</button>

            {/* Modalı kullanma */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <form onSubmit={isEditing ? handleUpdateProject : handleCreateProject}>
                    <input
                        type="text"
                        placeholder="Proje Adı"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)} // Proje ismini güncelle
                        required
                    />
                    <textarea 
                        placeholder="Proje Açıklaması"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)} // Proje açıklamasını güncelle
                        required
                    />
                    <button type="submit">{isEditing ? 'Proje Güncelle' : 'Proje Oluştur'}</button>
                </form>
            </Modal>

            <div className='project-list'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        project={project}
                        onEdit={handleEdit} 
                        onDelete={handleDelete}
                        onViewDetails={handleViewDetails}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPages;
