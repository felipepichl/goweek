import multer from 'multer';
import { resolve } from 'path';
import crypto from 'crypto';

const tempFolder = resolve(__dirname, '..', '..', 'temp');

export default {
  directories: {
    tempFolder,
    uploads: resolve(tempFolder, 'uploads'),
  },

  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const filename = `${hash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
