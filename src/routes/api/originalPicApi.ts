import { Router, Request, Response } from 'express';

const routes = Router();
// third path in magic/images/original/?filename=<filename>
routes.get('/original', async (req: Request, res: Response): Promise<void> => {
  const filename: string = req.query.filename as string;

  try {
    res.render('index', {
      origin: `${filename}.jpg`
    }); // res.render is to render original image as it is in the index.ejs
  } catch (error) {
    throw new Error(`Error ${error}`);
  }
});
export default routes;
