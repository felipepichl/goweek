import ICreateTweetDTO from '../dtos/ICreateTweetDTO';
import Tweet from '../infra/typeorm/schema/Tweet';

interface ITweetsRepository {
  create(data: ICreateTweetDTO): Promise<Tweet>;
}

export default ITweetsRepository;
