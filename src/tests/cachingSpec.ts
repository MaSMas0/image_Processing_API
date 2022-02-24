import { cachedImage } from '../caching';

describe('check if image do exist already', () => {
  it('expect  function cachedImage to be defined ', async () => {
    expect(cachedImage).toBeDefined();
  });
});
