const Sharing = require('../models/SharingModel');
const Note = require('../models/NoteModel');
const Project = require('../models/SharingModel');

const shareNote=async(req,res)=>{
    try {
        const {noteId,sharedWith,permission}=req.body;
        const note=await Note.findById(noteId)
        if(!note || note.user.toString() !== req.user.id){
            return res.status(403).json({ message: 'Unauthorized action' });
        }
        const sharing = new Sharing({ user: req.user.id, sharedWith, note: noteId, permission });
        await sharing.save();
        res.status(201).json(sharing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const shareProject=async(req,res)=>{
    try {
        const { projectId, sharedWith, permission } = req.body;

        // Projenin kullanıcıya ait olup olmadığını kontrol et
        const project = await Project.findById(projectId);
        if (!project || project.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized action' });
        }

        const sharing = new Sharing({ user: req.user.id, sharedWith, project: projectId, permission });
        await sharing.save();
        res.status(201).json(sharing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getShareWithMe=async(req,res)=>{
    try {
        const sharedNotes = await Sharing.find({ sharedWith: req.user.id }).populate('note');
        const sharedProjects = await Sharing.find({ sharedWith: req.user.id }).populate('project');
        res.status(200).json({ sharedNotes, sharedProjects });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const removeSharing=async(req,res)=>{
    try {
        const sharing = await Sharing.findByIdAndDelete(req.params.id);
        if (!sharing) {
            return res.status(404).json({ message: 'Sharing not found' });
        }
        res.status(200).json({ message: 'Sharing removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={shareNote,shareProject,getShareWithMe,removeSharing}
