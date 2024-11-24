import React from 'react';
import './css/ProjectCard.css'
function ProjectCard({ project, onEdit, onDelete ,onViewDetails}) {
    return (
        <div className='project-card'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button onClick={() => onEdit(project)}>Düzenle</button> {/* Düzenleme butonu */}
            <button onClick={() => onDelete(project._id)}>Sil</button>
            <button onClick={() => onViewDetails(project._id)}>Proje Detayları</button> 
        </div>
    );
}

export default ProjectCard;
