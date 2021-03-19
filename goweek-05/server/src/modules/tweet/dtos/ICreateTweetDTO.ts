import User from '@modules/users/infra/typeorm/schema/User';

interface ICreateTweetDTO {
  user: User;
  content: string;
}

export default ICreateTweetDTO;
