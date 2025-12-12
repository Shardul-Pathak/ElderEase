import express from 'express';
import verifyJWT from '../middlewares/authMiddleware.js';
import * as authController from '../controllers/authController.js';
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/google-auth-signup', authController.googleAuthSignUp);
router.post('/google-auth-login', authController.googleAuthLogin);
router.get('/verify', verifyJWT, (req, res) => {
    const { id, role } = req.user
    res.status(200).json({ message: 'Token is valid', id: id, role: role });
})
router.post('/logout', verifyJWT, authController.logout);
router.get('/getuser', verifyJWT, authController.getUserId);

export default router;