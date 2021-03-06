import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTweetService from '@modules/tweets/services/CreateTweetService';

class TweetsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content } = request.body;

    const user_id = request.user.id;

    const createTweet = container.resolve(CreateTweetService);

    const tweet = await createTweet.execute({ user_id, content });

    return response.json(tweet);
  }
}

export default TweetsController;
