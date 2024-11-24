const mongoose=require('mongoose');

const noteSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', // Proje modeli ile ilişkilendiriliyor (isteğe bağlı)
    },
    tags: [{
        type: String, // Etiketler bir dizi olarak saklanacak
    }],
    createdAt: {
        type: Date,
        default: Date.now, // Varsayılan olarak mevcut tarih
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})

noteSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;