const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String, // css color code
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});


tagSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
