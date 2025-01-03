import express from 'express';
import { loginUser, registerUser, verifyUser } from '../controllers/authController.js';


const router = express.Router();

// POST /login - User login
router.post('/login', loginUser);

// POST /signup - User registration
router.post('/signup', registerUser);

// GET /verify/:token - Email verification
router.get('/verify/:token', verifyUser);

export default router;
