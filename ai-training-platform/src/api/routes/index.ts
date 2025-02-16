import { Router } from 'express';
import { getSOPs, createSOP, updateSOP, deleteSOP } from '../controllers/index';

const router = Router();

router.get('/sops', getSOPs);
router.post('/sops', createSOP);
router.put('/sops/:id', updateSOP);
router.delete('/sops/:id', deleteSOP);

export default router;