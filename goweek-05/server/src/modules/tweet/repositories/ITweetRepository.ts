import ICreateTweetDTO from '../dtos/ICreateTweetDTO';
import Tweet from '../infra/typeorm/schema/Tweet';

interface ITweetRepository {
  create(data: ICreateTweetDTO): Promise<Tweet>;
}

export default ITweetRepository;
