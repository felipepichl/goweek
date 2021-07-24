import { Router } from 'express';

import { BoxesController } from '../controllers/BoxesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createBoxeRouter = Router();

const boxesController = new BoxesController();

createBoxeRouter.use(ensureAuthenticated);

createBoxeRouter.post('', boxesController.handle);

export { createBoxeRouter };
