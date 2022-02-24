import path from 'path';

const existingImgPath: string = path.resolve(__dirname, '../../public/images');
const generatedImgPath: string = path.resolve(
  __dirname,
  '../../public/images/thumbs'
);

export { existingImgPath, generatedImgPath };
// to separate the application into small chunks in order to be more scalable
