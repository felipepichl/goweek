import { Router } from 'express';

import { CreateBoxesController } from '../controllers/Boxes/CreateBoxesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createBoxeRouter = Router();

const boxesController = new CreateBoxesController();

createBoxeRouter.use(ensureAuthenticated);

createBoxeRouter.post('', boxesController.handle);

export { createBoxeRouter };
