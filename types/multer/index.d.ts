import { Readable } from 'stream';

declare global {
  namespace Express {
    namespace Multer {
      interface File {
        location: string;
      }
    }

    interface Request {
      file: Multer.File;
    }
  }
}
