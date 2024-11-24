const Activity = require('../models/ActivityModel');

const getActivities=async(req,res)=>{
    try {
        const activities = await Activity.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteAcyivity=async(req,res)=>{
    try {
        const activity = await Activity.findByIdAndDelete(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity deleted successfully' });
    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {getActivities,deleteAcyivity};