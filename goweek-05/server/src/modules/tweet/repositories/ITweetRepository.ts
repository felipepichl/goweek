import Tweet from '../infra/typeorm/schema/Tweet';

interface ITweetRepository {
  create(content: string): Promise<Tweet>;
}

export default ITweetRepository;
