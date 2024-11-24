const mongoose = require('mongoose');

const sharingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Kullanıcı modeli ile ilişkilendiriliyor
        required: true,
    },
    sharedWith: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Paylaşılan kullanıcının ID'si
        required: true,
    },
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note', // Paylaşılan not modeli ile ilişkilendiriliyor (isteğe bağlı)
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', // Paylaşılan proje modeli ile ilişkilendiriliyor (isteğe bağlı)
    },
    permission: {
        type: String,
        enum: ['read', 'edit', 'delete'], // Kullanıcıya verilen izinler
        required: true,
    },
    sharedAt: {
        type: Date,
        default: Date.now,
    },
});

// Modeli tanımla
const Sharing = mongoose.model('Sharing', sharingSchema);

module.exports = Sharing;
