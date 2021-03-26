import { application, Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import TweetsController from '../controllers/TweetsController';

const usersRouter = Router();
const tweetsController = new TweetsController();

application.use(ensureAuthenticated);

usersRouter.post('/', tweetsController.create);

export default usersRouter;
