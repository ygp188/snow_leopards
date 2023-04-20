import axios from 'axios';
import express from 'express';
import { Leopard, Post } from '../../db/models';
import { checkUserMiddleware } from '../middlewares';

const router = express.Router();

// Leopards
router.delete('/leopards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Leopard.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/leopards', async (req, res) => {
  try {
    const newLeopard = await Leopard.create(req.body);
    res.json(newLeopard);
  } catch (error) {
    res.sendStatus(500);
  }
});

// posts
router.delete('/posts/:id', checkUserMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/posts', async (req, res) => {
  if (!req.session?.user) {
    return res.sendStatus(401);
  }

  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session?.user?.id,
    });
    return res.json(newPost);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.patch('/posts/:id', async (req, res) => {
  try {
    await Post.update(req.body, { where: { id: req.params.id } });
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.sendStatus(500);
  }
});

// dog facts
router.get('/dogfacts', async (req, res) => {
  try {
    const { data } = await axios(
      'https://dog-api.kinduff.com/api/facts?number=1',
    );
    res.json(data.facts[0]);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
