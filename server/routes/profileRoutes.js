import express from 'express';
import verifyJWT from '../middlewares/authMiddleware.js';
import * as profileController from '../controllers/profileController.js';
const router = express.Router();

router.post('/update', verifyJWT, profileController.updateProfile);
router.post('/updateCT', verifyJWT, profileController.updateCTProfile);
router.get('/get', verifyJWT, profileController.getProfile);
router.get('/username', verifyJWT, profileController.getUsername);
router.post('/usernameCT', verifyJWT, profileController.getUsernameCT);

export default router;