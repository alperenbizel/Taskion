const mongoose =require('mongoose');

const projectSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    user:{
         type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note', 
    }],
    tasks: [{ // Yeni görevler için alan
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task', // Eğer 'Task' modeli varsa, ona referans
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

projectSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Project = mongoose.model('Project',projectSchema)

module.exports= Project;
