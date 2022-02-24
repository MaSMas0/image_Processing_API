import { imageProcessing } from '../app';
import { cachedImage } from '../caching';
import { generatedImgPath } from '../utilities/utility';

describe('check if image do exist already or not', () => {
  it('expect  function cachedImage to check the image parameters and  ', async () => {
    await cachedImage(99, 99, 2, 'fjord');
    const generatedImageFilePath = `${generatedImgPath}/fjord_2_99_99.jpg`;
    try {
      if (!generatedImageFilePath) {
        expect(cachedImage).toEqual(imageProcessing);
      }
    } catch (err) {
      console.log(`Error ${err}`);
    }
  });
});
