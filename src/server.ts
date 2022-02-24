import express from 'express';
import path from 'path';
import routes from './routes/routes';
import morgan from 'morgan';

const app = express();
const port = 2784;
// to use the static files in public (images)
app.use('/images', express.static(path.join(__dirname, '../public/images')));
app.set('view engine', 'ejs'); //=> to let node deal with ejs the template engine
app.use(morgan('tiny')); //Add in logging to record when images are processed or accessed.
app.use('/magic', routes);
//first path in the endpoint and the rest from the routes file magic/images/original or progressive/? so on

app.use((_req: express.Request, res: express.Response): void => {
  res.status(404).send("ops! can't find what you are looking for :(");
});
// in case the user requested the wrong link
app.listen(port, () => {
  console.log(`server is up and running :D on port ${port}`);
});

export { app };
