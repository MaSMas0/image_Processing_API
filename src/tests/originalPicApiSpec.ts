import fs from 'fs';
import { existingImgPath } from '../utilities/utility';

describe('check paths of original images', () => {
  it('check if palmtunnel is in the correct directory path', () => {
    expect(fs.existsSync(`${existingImgPath}/palmtunnel.jpg`)).toBeTruthy();
  });
  it('images other than the 5 images should not be exist', () => {
    expect(fs.existsSync(`${existingImgPath}/whoami.jpg`)).toBeFalsy();
  });
});
