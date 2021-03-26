import IJwtTokenProvider from '../models/IJwtTokenProvider';

class FakeJwtTokenProvider implements IJwtTokenProvider {
  public async tokenGenerate(user_id: string): Promise<string> {
    return user_id;
  }
}

export default FakeJwtTokenProvider;
