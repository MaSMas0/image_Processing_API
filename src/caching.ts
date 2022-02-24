import { generatedImgPath } from './utilities/utility';
import fs from 'fs-extra';

//caching
//checking if image exist
const cachedImage = async (
  width: number,
  height: number,
  filename: string
): Promise<boolean> => {
  const generatedImageFilePath = `${generatedImgPath}/${filename}_${width}_${height}.jpg`;
  try {
    await fs.ensureDir(generatedImgPath);
    const isProcessedImageExists: boolean = await fs.pathExists(
      generatedImageFilePath
    );
    return isProcessedImageExists;
  } catch (error) {
    throw new Error('file does not exist');
  }
};
export { cachedImage };
