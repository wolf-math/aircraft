import express from 'express';
const router = express.Router();

import { getAirplane, getAll } from '../controllers/airplane_controller.js';

router.get('/', getAll);
router.get('/:airplane', getAirplane);

export default router;
