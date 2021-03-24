import { Router } from 'express';

import TweetsController from '../controllers/TweetsController';

const usersRouter = Router();
const tweetsController = new TweetsController();

usersRouter.post('/', tweetsController.create);

export default usersRouter;
