import supertest from 'supertest';
import { app } from '../server';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint : magic/images/original', async () => {
    const response = await request.get(
      '/magic/images/original/?filename=fjord'
    );
    expect(response.status).toBe(200);
  });
  it('gets the api endpoint : magic/images/processing', async () => {
    const response = await request.get(
      '/magic/images/original/?width=200&height=200&filename=palmtunnel'
    );
    expect(response.status).toBe(200);
  });
});
