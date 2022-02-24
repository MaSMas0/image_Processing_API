import { imageProcessing } from '../app';

describe('check if image is getting processed', () => {
  it('expect  function imageProcessing to be defined ', async () => {
    expect(imageProcessing).toBeDefined();
  });
});
