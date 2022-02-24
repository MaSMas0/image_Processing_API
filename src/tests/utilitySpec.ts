/* eslint-disable prettier/prettier */
/* the reason is that some modification  of prettier doesn't go well in this part so i let it 
till some point then i disabled it */
import * as util from '../utilities/utility';

describe('Image Directory paths', () => {
  it('check the original images directory absolute paths', () => {
    expect(util.existingImgPath).toBe(
      '/Users/mas/Desktop/Image_Processing_API/public/images')
    })

  it('check the generated images directory absolute paths', () => {
    expect(util.generatedImgPath).toEqual(
      '/Users/mas/Desktop/Image_Processing_API/public/images/thumbs'
    )
  });
});
