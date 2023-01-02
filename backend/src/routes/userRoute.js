import express from 'express';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username, password});
        if(user){
            res.send(user);
        } else {
            return res.status(404).json(error);
        }
    } catch (error) {
        return res.status(404).json(error);
    }
});

userRouter.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send("User registered successfully");
    } catch (error) {
        return res.status(404).json(error);
    }
});
export default userRouter;