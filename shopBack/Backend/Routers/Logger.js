import express from "express";
import USER from "../Models/User.Model.js";
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs';

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const exists = await USER.findOne({ username: username });
    
    if (!exists) {
        return res.status(400).json({ success: false, message: "The username you have entered does not exist" });
    }

    // Compare the password with the stored hash
    const HashBool = await bcryptjs.compare(password, exists.password.toString());

    if (!HashBool) {
        return res.status(400).json({ success: false, message: "Username and Password do not match" });
    }

    // Create JWT token
    const payload = { id: exists._id, username: exists.username.toString() };
    const token = jwt.sign(payload, process.env.JWT_SECRET.toString(), { expiresIn: "1h" });

    return res.status(200).json({ success: true, message: "Logged in", token: token });
});

export default router;
