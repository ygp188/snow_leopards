import express from 'express';
import { Leopard } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const leopards = await Leopard.findAll({ order: [['updatedAt', 'DESC']] });
    const initState = { leopards };
    res.render('Layout', initState);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const leopard = await Leopard.findByPk(id);
    const initState = { leopard };
    res.render('Layout', initState);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
