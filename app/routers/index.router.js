import express from 'express';
import controller from '../controllers/index.controller.js';

const router = express.Router();

router.get('/cadex', controller.getCadex);

export default router;
