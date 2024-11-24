const Task = require('../models/TaskModel');
const Project = require('../Models/ProjectModel'); // Proje modelini ekle

// const createTask = async (req, res) => {
//     try {
//         const { title, description, dueDate, project, status = "pending" } = req.body; // Varsayılan durum ekleniyor
//         const task = new Task({ title, description, dueDate, user: req.user.id, project, status });
        
//         await task.save();

//         // Projeye görevi ekle
//         await Project.findByIdAndUpdate(
//             project,
//             { $push: { tasks: task._id } }, // Yeni görevi projenin görevlerine ekle
//             { new: true }
//         );

//         res.status(201).json(task);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, project } = req.body; // Durum artık burada yok
        const task = new Task({ 
            title, 
            description, 
            dueDate, 
            user: req.user.id, 
            project, 
            status: "pending" // Varsayılan durum burada ayarlanıyor
        });

        await task.save();

        // Projeye görevi ekle
        await Project.findByIdAndUpdate(
            project,
            { $push: { tasks: task._id } },
            { new: true }
        );

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.projectId, user: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { title, description, dueDate, status } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, dueDate, status }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask, getTask, updateTask, deleteTask };
