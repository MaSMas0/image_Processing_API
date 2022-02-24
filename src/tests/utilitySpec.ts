import { existingImgPath, generatedImgPath } from '../utilities/utility';

describe('Image Directory paths', () => {
  it('check the original images directory absolute paths', () => {
    expect(existingImgPath).toBe(
      '/Users/mas/Desktop/Image_Processing_API/public/images'
    );
  });

  it('check the generated images directory absolute paths', () => {
    expect(generatedImgPath).toEqual(
      '/Users/mas/Desktop/Image_Processing_API/public/images/thumbs'
    );
  });
});
