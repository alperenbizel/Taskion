const Project = require('../Models/ProjectModel');

const createProject=async(req,res)=>{
    try{
const {name,description}=req.body;
const project= new Project({name,description,user:req.user.id})
await project.save();
res.status(200).json(project)
    }catch(error){
        res.status(500).json({ message: error.message });
    }   
}

const getProject =async(req,res)=>{
    try {
        const projects=await Project.find({user: req.user.id })
         res.status(200).json(projects)   
         
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateProject=async(req,res)=>{
    try {
        const { name, description } = req.body;
        const project = await Project.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProjectById=async(req,res)=>{
    try {
        const project = await Project.findById(req.params.id).populate('notes tasks');
        if (!project) {
            return res.status(404).json({ message: 'Proje bulunamadı' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.response ? error.response.data : error.message});
    }
}

const deleteProject=async(req,res)=>{
    try {
        await Project.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={createProject,getProject,getProjectById,updateProject,deleteProject}
