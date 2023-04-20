import { Post } from '../../db/models';

export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session?.user;
  next();
};

export const checkUserMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.session?.user?.id;

  const post = await Post.findByPk(id);

  if (!(userId === post.user_id)) {
    return res.sendStatus(401);
  }

  return next();
};
