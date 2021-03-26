import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import TweetsController from '../controllers/TweetsController';

const tweetsRouter = Router();
const tweetsController = new TweetsController();

tweetsRouter.use(ensureAuthenticated);

tweetsRouter.post('/', tweetsController.create);

export default tweetsRouter;
