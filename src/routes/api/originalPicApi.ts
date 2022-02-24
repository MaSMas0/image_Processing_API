import express from 'express';

const routes = express.Router();

routes.get('/original', async (req, res) => {
  const filename = req.query.filename as string;

  try {
    res.render('index', {
      origin: `${filename}.jpg`
    });
  } catch (error) {
    throw new Error(`Error ${error}`);
  }
});
export default routes;
