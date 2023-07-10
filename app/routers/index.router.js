import express from 'express';
import controller from '../controllers/index.controller.js';

const router = express.Router();

/*
router.get('/cadex', controller.getCadex);
router.post('/cadex', controller.postCadex);
*/

router.route('/cadex')
  .get(controller.getCadex)
  .post(controller.postCadex);

export default router;
