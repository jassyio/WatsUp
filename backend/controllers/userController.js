const User = require('../models/userModel');

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude password
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password');
        res.json(users)
    } catch (error) {
        next(error)
    }
}


module.exports = { getUser, getAllUsers };