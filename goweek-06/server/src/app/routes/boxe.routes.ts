import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import { CreateBoxesController } from '../controllers/Boxes/CreateBoxesController';
import { ListBoxesController } from '../controllers/Boxes/ListBoxesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createBoxeRouter = Router();
const upload = multer(uploadConfig);

const createBoxesController = new CreateBoxesController();
const listBoxesController = new ListBoxesController();

createBoxeRouter.use(ensureAuthenticated);

createBoxeRouter.post('', upload.single('file'), createBoxesController.handle);
createBoxeRouter.get('', listBoxesController.handle);

export { createBoxeRouter };
