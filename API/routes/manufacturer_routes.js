import express from 'express';
const router = express.Router();

import { getAirplanesByManufacturer } from '../controllers/manufacturer_controller.js';

router.get('/:manufacturer', getAirplanesByManufacturer);

export default router;
