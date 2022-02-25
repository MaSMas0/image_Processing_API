import path from 'path';

const imagesNames: string[] = [
  'fjord',
  'encenadaport',
  'palmtunnel',
  'santamonica',
  'icelandwaterfall'
];

const existingImgPath: string = path.resolve(__dirname, '../../public/images');
const generatedImgPath: string = path.resolve(
  __dirname,
  '../../public/images/thumbs'
);

export { existingImgPath, generatedImgPath, imagesNames };
// to separate the application into small chunks in order to be more scalable
