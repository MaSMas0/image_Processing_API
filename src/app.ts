import sharp from 'sharp';
import fs from 'fs/promises';
import * as util from './utilities/utility';

const imageProcessing = async (
  width: number,
  height: number,
  mode: string,
  filename: string
) => {
  const existingImageFilePath = `${util.existingImgPath}/${filename}.jpg`;
  const generatedImageFilePath = `${util.generatedImgPath}/${filename}_${width}_${height}_${mode}.jpg`;
  try {
    const processedImage = await sharp(existingImageFilePath)
      .resize(width, height)
      .toBuffer();
    fs.writeFile(generatedImageFilePath, processedImage);
  } catch (error) {
    throw new Error('Unable to process image');
  }
};

//caching
//checking if image exist
const cachedImage = async (
  width: number,
  height: number,
  mode: string,
  filename: string
) => {
  const generatedImageFilePath = `${util.generatedImgPath}/${filename}_${width}_${height}_${mode}.jpg`;
  try {
    await fs.access(generatedImageFilePath);
    return generatedImageFilePath;
  } catch (error) {
    throw new Error('file does not exist');
  }
};
export default { imageProcessing, cachedImage };
