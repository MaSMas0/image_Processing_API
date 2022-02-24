import sharp from 'sharp';
import { existingImgPath, generatedImgPath } from './utilities/utility';

const imageProcessing = async (
  width: number,
  height: number,
  filename: string
) => {
  const existingImageFilePath = `${existingImgPath}/${filename}.jpg`;
  const generatedImageFilePath = `${generatedImgPath}/${filename}_${width}_${height}.jpg`;
  try {
    await sharp(existingImageFilePath)
      .resize(Number(width), Number(height))
      .toFile(generatedImageFilePath);
  } catch (error) {
    throw new Error('Unable to process image');
  }
};

export { imageProcessing };
