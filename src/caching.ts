import { generatedImgPath } from './utilities/utility';
import fs from 'fs';

//caching
//checking if image exist
const cachedImage = async (
  width: number,
  height: number,
  filename: string
): Promise<boolean> => {
  const generatedImageFilePath = `${generatedImgPath}/${filename}_${width}_${height}.jpg`;
  try {
    fs.existsSync(generatedImgPath);
    const isProcessedImageExists: boolean = fs.existsSync(
      generatedImageFilePath
    );
    return isProcessedImageExists;
  } catch (error) {
    throw new Error('file does not exist');
  }
};
export { cachedImage };
