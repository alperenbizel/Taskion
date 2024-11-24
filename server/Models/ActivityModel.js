const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    action: {
        type: String,
        required: true,
        enum: [
            'note_created',
            'note_deleted',
            'note_updated',
            'project_created',
            'project_deleted',
            'project_updated',
            'task_created',
            'task_deleted',
            'task_updated',
            'tag_created',
            'tag_deleted',
            'comment_added',
            'comment_deleted',
            'file_uploaded',
            'file_deleted',
        ],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Kullanıcı modeli ile ilişkilendiriliyor
        required: true,
    },
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note', // Not modeli ile ilişkilendiriliyor (isteğe bağlı)
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', // Proje modeli ile ilişkilendiriliyor (isteğe bağlı)
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Modeli tanımla
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
