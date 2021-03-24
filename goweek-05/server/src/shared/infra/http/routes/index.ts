import { Router } from 'express';

import userRouter from '@modules/users/infra/http/routes/users.routes';
import tweetRouter from '@modules/tweets/infra/http/routes/tweets.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/tweets', tweetRouter);

export default router;
