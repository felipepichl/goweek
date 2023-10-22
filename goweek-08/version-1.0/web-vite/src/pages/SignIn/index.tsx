import logo from '../../assets/logo.svg';

import { Container } from "./styles";

export function SignIn() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <form 
      // onSubmit={handleSubmit}
      >
        <input
          placeholder="Digite seu usuário do github"
          // value={username}
          // onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}