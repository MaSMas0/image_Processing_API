import { Router, Request, Response } from 'express';
import { imageProcessing } from '../../app';
import { cachedImage } from '../../caching';
const routes = Router();
// third path in magic/images/processing/?width=<width>&height=<height>&filename=<filename>
routes.get(
  '/processing',
  async (req: Request, res: Response): Promise<void> => {
    const width: number = parseInt(req.query.width as string, 10); //assumed by default 10 unless the number starts with 0x it will be 16
    const height: number = parseInt(req.query.height as string, 10); //assumed by default 10 unless the number starts with 0x it will be 16
    const blury: number = parseInt(req.query.blury as string, 10); //Further explore the options in the Sharp module and add additional processing options.
    const filename: string = req.query.filename as string;

    try {
      const cachedImageExist = await cachedImage(
        width,
        height,
        blury,
        filename
      );
      if (!cachedImageExist) {
        await imageProcessing(width, height, blury, filename);
      }
      res.render('processingImg', {
        width,
        height,
        blury,
        thumb: `${filename}_${blury}_${width}_${height}.png`
      }); // res.render is to render results of processed image in the processingImg.ejs
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }
);
export default routes;
