import express from 'express';
const app = express();
const port = 2784;

app.get('/', (req, res) => {
  res.send('Hola world! :D');
});

app.listen(port, () => {
  console.log(`server is up and running :D on port ${port}`);
});
