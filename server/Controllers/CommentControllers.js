const Comment = require('../Models/CommentModel');

const createComment= async(req,res)=>{
    try{
const {content,note}=req.body;
const comment= new Comment({content,user:req.user.id,note})
  await comment.save();
  res.status(201).json(comment);
}catch(error)
    {
        res.status(500).json({ message: error.message });
    }
}

const getComments=async(req,res)=>{
    try {
        const comments=await Comment.find({note:req.params.noteId})
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteComment=async(req,res)=>{
    try {
        const comment=await Comment.findById(req.params.id)
if(!comment || comment.user.toString() !== req.user.id){
    return res.status(403).json({ message: 'Unauthorized action' });
}
await Comment.findByIdAndDelete(req.params.id);
res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports= {createComment,getComments,deleteComment}


