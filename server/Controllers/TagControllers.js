const Tag = require('../models/TagModel');


    const createTag= async (req, res) => {
        try {
            const { name, color } = req.body;
            const tag = new Tag({ name, color, user: req.user.id });
            await tag.save();
            res.status(201).json(tag);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    const getTags= async (req, res) => {
        try {
            const tags = await Tag.find({ user: req.user.id });
            res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    const deleteTag= async (req, res) => {
        try {
            const tag = await Tag.findByIdAndDelete(req.params.id);
            if (!tag) {
                return res.status(404).json({ message: 'Tag not found' });
            }
       
            res.status(200).json({ message: 'Tag deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


module.exports = {createTag,getTags,deleteTag}
