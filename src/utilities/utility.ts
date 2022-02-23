import path from 'path';

const imgArray = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica'
];

const existingImgPath = path.resolve(__dirname, '../../public/images');
const generatedImgPath = path.resolve(__dirname, '../../public/thumbs');

export { imgArray, existingImgPath, generatedImgPath };
