const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note', 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});


fileSchema.pre('save', function (next) {
    this.uploadedAt = Date.now();
    next();
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
