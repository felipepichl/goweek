import { Router } from 'express';

import DevController from '../app/controllers/DevController';
import LikeController from '../app/controllers/LikeController';
import DislikeControlle from '../app/controllers/DislikeControlle';

const routes = new Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:_id/likes', LikeController.store);
routes.post('/devs/:_id/dislikes', DislikeControlle.store);

export { routes };
