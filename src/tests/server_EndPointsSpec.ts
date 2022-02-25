import supertest from 'supertest';
import { app } from '../server';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint : magic/images/original', async () => {
    const response = await request.get(
      '/magic/images/original/?filename=icelandwaterfall'
    );
    expect(response.status).toBe(200);
  });
  it('gets the api endpoint : magic/images/processing', async () => {
    const response = await request.get(
      '/magic/images/processing/?width=200&height=200&blury=2&filename=palmtunnel'
    );
    expect(response.status).toBe(200);
  });
});
