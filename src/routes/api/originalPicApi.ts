import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/original', async (req: Request, res: Response) => {
  const filename: string = req.query.filename as string;

  try {
    res.render('index', {
      origin: `${filename}.jpg`
    });
  } catch (error) {
    throw new Error(`Error ${error}`);
  }
});
export default routes;
