import { Router } from 'express';

import { SessionController } from '../controllers/User/SessionController';

const sessionRouter = Router();

const sessionController = new SessionController();

sessionRouter.post('', sessionController.handle);

export { sessionRouter };
