import fs from 'fs';
import { generatedImgPath } from '../utilities/utility';

describe('check caching in images', () => {
  it('Images after processing properties should exist', () => {
    expect(
      fs.existsSync(`${generatedImgPath}/palmtunnel_300_300.jpg`)
    ).toBeTruthy();
  });
  it('Images before processing properties should not be exist', () => {
    expect(
      fs.existsSync(`${generatedImgPath}/palmtunnel_500_500.jpg`)
    ).toBeFalsy();
  });
});
