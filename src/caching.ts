import { generatedImgPath } from './utilities/utility';
import fs from 'fs';

//caching
//checking if image exist
const cachedImage = async (
  width: number,
  height: number,
  blury: number,
  filename: string
): Promise<boolean> => {
  const generatedImageFilePath = `${generatedImgPath}/${filename}_${blury}_${width}_${height}.jpg`;
  try {
    fs.existsSync(generatedImgPath);
    const isProcessedImageExists: boolean = fs.existsSync(
      generatedImageFilePath
    ); //existsSync is a filesystem method to check used to synchronously check if a file already exists in the given path or not
    return isProcessedImageExists;
  } catch (error) {
    throw new Error('file does not exist');
  }
};
export { cachedImage };
