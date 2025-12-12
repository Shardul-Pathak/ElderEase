import express from 'express';
import verifyJWT from '../middlewares/authMiddleware.js';
import * as logController from '../controllers/logController.js';
const router = express.Router();

router.post('/add', verifyJWT, logController.addLog);
router.post('/getbyid', verifyJWT, logController.getLogById);
router.post('/addSymptom', verifyJWT, logController.addSymptom);
router.post('/report', verifyJWT, logController.getReport);
router.get('/get', verifyJWT, logController.getLogs);
router.get('/getCT', verifyJWT, logController.getLogsCT);

export default router;