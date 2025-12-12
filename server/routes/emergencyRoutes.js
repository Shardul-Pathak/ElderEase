import express from 'express';
import verifyJWT from '../middlewares/authMiddleware.js';
import * as emergencyController from '../controllers/emergencyController.js';
const router = express.Router();

router.post('/add', verifyJWT, emergencyController.add);
router.get('/all', verifyJWT, emergencyController.getContacts);

export default router;