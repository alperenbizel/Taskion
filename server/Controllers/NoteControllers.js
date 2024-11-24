const Note = require('../models/NoteModel');
const Project = require('../Models/ProjectModel'); // Proje modelini ekle

const createNote=async(req,res)=>{
    try {
        const { title,project } = req.body;
        const note = new Note({
             title,
            
              user: req.user.id, 
              project });
        await note.save();

        await Project.findByIdAndUpdate(
            project,
            { $push: { notes: note._id } },
            { new: true }
        );

        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getNotes=async(req,res)=>{
try{
    const notes=await Note.find({user:req.user.id})
res.status(200).json(notes)
}catch(error){
    res.status(500).json({nessage:error.message})
}
}


const getNoteById=async(req,res)=>{
    try{
const note=await Note.findOne({ _id: req.params.id, user: req.user.id})
if(!note){
return  res.status(404).json({ message: 'Note not found' });
}   
res.status(200).json(note);

}catch(error){
        res.status(500).json({ message: error.message });
    }
}

const updateNote =async(req,res)=>{
    try {
        const {title,content,tags}=req.body;
        const note=await Note.findByIdAndUpdate(req.params.is, { title, content, tags }, { new: true })
        res.status(200).json(note);   
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteNote=async(req,res)=>{
    try {
        await Note.findOneAndDelete({_id: req.params.id, user: req.user.id })
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports={createNote,getNotes,getNoteById,updateNote,deleteNote}
