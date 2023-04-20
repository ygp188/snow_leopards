import express from 'express';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import indexRouter from './routes/indexRouter';
import leopardsRouter from './routes/leopardsRouter';
import apiRouter from './routes/apiRouter';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRoter';
import postsRouter from './routes/postsRouter';
import { authMiddleware, pathMiddleware } from './middlewares';
import jsxRender from './utils/jsxRender';

const FileStore = store(session);

const app = express();

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(pathMiddleware);
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'oh_klahoma', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  store: new FileStore(), // Место хранения сессий
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));
app.use(authMiddleware);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/leopards', leopardsRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Server has started on port 3000');
});
