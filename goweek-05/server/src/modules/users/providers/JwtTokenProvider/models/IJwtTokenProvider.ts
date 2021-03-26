interface IJwtTokenProvider {
  tokenGenerate(user_id: string): Promise<string>;
}

export default IJwtTokenProvider;
