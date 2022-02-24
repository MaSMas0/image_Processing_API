import { Router, Request, Response } from 'express';
import { imageProcessing } from '../../app';
import { cachedImage } from '../../caching';
const routes = Router();

routes.get('/processing', async (req: Request, res: Response) => {
  const width: number = parseInt(req.query.width as string, 10); //assumed by default 10 unless the number starts with 0x it will be 16
  const height: number = parseInt(req.query.height as string, 10); //assumed by default 10 unless the number starts with 0x it will be 16
  const filename: string = req.query.filename as string;

  try {
    const cachedImageExist = await cachedImage(width, height, filename);
    if (!cachedImageExist) {
      await imageProcessing(width, height, filename);
    }
    res.render('processingImg', {
      width,
      height,
      thumb: `${filename}_${width}_${height}.jpg`
    });
  } catch (error) {
    throw new Error(`Error ${error}`);
  }
});
export default routes;
