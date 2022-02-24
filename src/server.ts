import express from 'express';
import path from 'path';
import routes from './routes/routes';

const app = express();
const port = 2784;

app.use('/images', express.static(path.join(__dirname, '../public/images')));
app.set('view engine', 'ejs');
app.use('/magic', routes);
app.use((req, res) => {
  res.status(404).send("ops! can't find what you are looking for :(");
});
app.listen(port, () => {
  console.log(`server is up and running :D on port ${port}`);
});

export { app };
