import { Router } from 'express';

import { CreateBoxesController } from '../controllers/Boxes/CreateBoxesController';
import { ListBoxesController } from '../controllers/Boxes/ListBoxesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createBoxeRouter = Router();

const createBoxesController = new CreateBoxesController();
const listBoxesController = new ListBoxesController();

createBoxeRouter.use(ensureAuthenticated);

createBoxeRouter.post('', createBoxesController.handle);
createBoxeRouter.get('', listBoxesController.handle);

export { createBoxeRouter };
