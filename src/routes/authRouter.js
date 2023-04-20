import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) res.sendStatus(400);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { username, password: await bcrypt.hash(password, 5) },
    });

    if (!created) res.sendStatus(403);

    req.session.user = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) res.sendStatus(400);

    const user = await User.findOne({ where: { email } });

    if (!user) res.sendStatus(400);

    if (!(await bcrypt.compare(password, user.password))) res.sendStatus(401);

    req.session.user = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid').sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
