import { ObjectID } from 'mongodb';

interface ICreateTweetDTO {
  user_id: ObjectID;
  content: string;
}

export default ICreateTweetDTO;
