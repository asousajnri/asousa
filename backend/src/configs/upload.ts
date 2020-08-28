import multer from 'multer';
import path from 'path';

export default {
  storage: new multer.diskStorage({
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  }),
  destination: path.resolve(__dirname, '..', '..', 'uploads'),
};
