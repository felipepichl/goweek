import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import { CreateFilesController } from '@controller/Files/CreateFilesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createFileRouter = Router();
const upload = multer(uploadConfig);

const createFilesController = new CreateFilesController();

createFileRouter.use(ensureAuthenticated);

createFileRouter.post(
  '/:box_id',
  upload.single('file'),
  createFilesController.handle,
);

export { createFileRouter };
