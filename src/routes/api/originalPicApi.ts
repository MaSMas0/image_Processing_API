import { Router, Request, Response } from 'express';
import { imagesNames } from '../../utilities/utility';

const routes = Router();
// third path in magic/images/original/?filename=<filename>
routes.get('/original', async (req: Request, res: Response): Promise<void> => {
  const filename: string = req.query.filename as string;
  if (imagesNames.indexOf(filename) < 0) {
    res
      .status(422)
      .send(
        'ops! sorry not included in the offered pictures please choose from [ fjord,encenadaport,palmtunnel,santamonica,icelandwaterfall]'
      );
  } else {
    try {
      res.render('index', {
        origin: `${filename}.jpg`
      }); // res.render is to render original image as it is in the index.ejs
    } catch (error) {
      res.status(422).send('ops! sorry for annoyance');
    }
  }
});
export default routes;
