import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { createBoxeRouter } from '../app/routes/boxe.routes';
import { createFileRouter } from '../app/routes/file.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/session', sessionRouter);

router.use('/boxes', createBoxeRouter);

router.use('/files', createFileRouter);

export default router;
