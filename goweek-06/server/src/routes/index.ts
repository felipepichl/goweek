import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { createBoxeRouter } from '../app/routes/boxe.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/session', sessionRouter);

router.use('/boxes', createBoxeRouter);

export default router;
