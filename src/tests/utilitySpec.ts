import { existingImgPath, generatedImgPath } from '../utilities/utility';
import path from 'path';
describe('Image Directory paths', () => {
  it('check the original images directory absolute paths', () => {
    expect(existingImgPath).toBe(
      path.resolve(__dirname, '../../public/images')
    );
  });

  it('check the generated images directory absolute paths', () => {
    expect(generatedImgPath).toEqual(
      path.resolve(__dirname, '../../public/images/thumbs')
    );
  });
});
