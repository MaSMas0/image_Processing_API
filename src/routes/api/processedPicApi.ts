import express from 'express';
import { imageProcessing } from '../../app';
import { cachedImage } from '../../caching';
const routes = express.Router();

routes.get('/processing', async (req, res) => {
  const width = parseInt(req.query.width as string); //assumed by default 10 unless the number starts with 0x it will be 16
  const height = parseInt(req.query.height as string); //assumed by default 10 unless the number starts with 0x it will be 16
  const filename = req.query.filename as string;

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
