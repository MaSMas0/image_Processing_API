import path from 'path';

const imgArray = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica'
];

const existingImgPath = path.resolve('../../public/images', __dirname);
const generatedImgPath = path.resolve('../../public/thumbs', __dirname);

export { imgArray, existingImgPath, generatedImgPath };
