import express from 'express';
import { Post } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const initState = {
      posts: await Post.findAll({ order: [['createdAt', 'ASC']] }),
    };
    res.render('Layout', initState);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
