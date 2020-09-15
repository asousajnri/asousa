import { Readable } from 'stream';

declare global {
  namespace Express {
    namespace MulterS3 {
      interface File {
        location: string;
      }
    }

    interface Request {
      fileS3: MulterS3.File;
    }
  }
}
