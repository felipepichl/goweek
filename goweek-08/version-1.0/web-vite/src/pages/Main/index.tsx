import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { api } from '../../services/api'

import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'

import { Container, Buttons, Done } from './styles'

type Devs = {
  _id: string
  name: string
  user: string
  bio: string
  avatar: string
}

export function Main() {
  const { id: _id } = useParams()
  const [devs, setDevs] = useState<Devs[]>([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs', {
        headers: { user: _id },
      })

      setDevs(response.data)
    }

    loadDevs()
  }, [_id])

  async function handleLike(id: string) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: _id },
    })

    setDevs(devs.filter((dev) => dev._id !== id))
  }

  async function handleDislike(id: string) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: _id },
    })

    setDevs(devs.filter((dev) => dev._id !== id))
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>

      {devs.length > 0 ? (
        <ul>
          {devs.map((dev) => (
            <li key={dev._id}>
              <img src={dev.avatar} alt="" />

              <footer>
                <strong>{dev.name}</strong>
                <p>{dev.bio}</p>
              </footer>
              <Buttons>
                <button type="button" onClick={() => handleDislike(dev._id)}>
                  <img src={dislike} alt="" />
                </button>
                <button type="button" onClick={() => handleLike(dev._id)}>
                  <img src={like} alt="" />
                </button>
              </Buttons>
            </li>
          ))}
        </ul>
      ) : (
        <Done> Done :( </Done>
      )}
    </Container>
  )
}
