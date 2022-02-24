import path from 'path';

const existingImgPath: string = path.resolve(__dirname, '../../public/images');
const generatedImgPath: string = path.resolve(
  __dirname,
  '../../public/images/thumbs'
);

export { existingImgPath, generatedImgPath };
