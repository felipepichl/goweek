import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Container } from './styles'
import { api } from '../../services/api'

export function SignIn() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await api.post('/devs', { username })

    const { _id } = response.data

    navigate(`/dev/${_id}`)
  }

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite seu usuário do github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}
