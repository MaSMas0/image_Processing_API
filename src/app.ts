import sharp from 'sharp';
import { existingImgPath, generatedImgPath } from './utilities/utility';

const imageProcessing = async (
  width: number,
  height: number,
  blury: number,
  filename: string
): Promise<void> => {
  const existingImageFilePath = `${existingImgPath}/${filename}.jpg`;
  const generatedImageFilePath = `${generatedImgPath}/${filename}_${blury}_${width}_${height}.png`; // to make it in png
  try {
    await sharp(existingImageFilePath)
      .resize(Number(width), Number(height))
      .blur(Number(blury)) // Further explore the options in the Sharp module and add additional processing options.
      // note please for the blur give value between 1 to 1000
      .toFile(generatedImageFilePath); //using sharp to make the image processing on the original image path
  } catch (error) {
    throw new Error('Unable to process image');
  }
};

export { imageProcessing };
