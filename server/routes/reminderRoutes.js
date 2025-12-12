import express from 'express';
import verifyJWT from '../middlewares/authMiddleware.js';
import * as reminderController from '../controllers/reminderController.js';
const router = express.Router();

router.post('/add', verifyJWT, reminderController.addReminder);
router.get('/get', verifyJWT, reminderController.getReminders);
router.get('/getCT', verifyJWT, reminderController.getRemindersCT);
router.get('/getnames', verifyJWT, reminderController.getNames);
router.post('/update', verifyJWT, reminderController.updateReminders);

export default router;