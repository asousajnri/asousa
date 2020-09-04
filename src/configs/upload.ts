import path from 'path';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

export default {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),
  storage: multerS3({
    s3: new aws.S3(),
    bucket: 'asousaportfolio',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
};
