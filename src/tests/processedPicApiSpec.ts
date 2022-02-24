import fs from 'fs';
import path from 'path';
import { imageProcessing } from '../app';
import { generatedImgPath } from '../utilities/utility';

describe('check image processing', () => {
  it('succeeds to write resized thumb file (existing file, valid size values)', async (): Promise<void> => {
    await imageProcessing(99, 99, 2, 'fjord');

    const cachedImagePath: string = path.resolve(
      generatedImgPath,
      `fjord_1_99_99.jpg`
    );
    let imageError: null | string = '';
    try {
      fs.access(cachedImagePath, (fileExist) => {
        if (!fileExist) {
          console.log('no existing file in the mentioned directory');
        }
      });
      imageError = null;
    } catch {
      imageError = 'File was not created';
    }

    expect(imageError).toBeNull();
  });
});
