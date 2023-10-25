import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { api } from '../../services/api'

import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'

import { Container, Buttons } from './styles'

type Devs = Array<{
  _id: string
  name: string
  user: string
  bio: string
  avatar: string
}>

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

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>

      {
        devs.length > 0 ? 
      }

      <ul>
        <li>
          <img src="https://github.com/felipepichl.png" alt="" />

          <footer>
            <strong>Felipe</strong>
            <p>Nice guy</p>
          </footer>
          <Buttons>
            <button
              type="button"
              // onClick={() => handleDislike(dev._id)}
            >
              <img src={dislike} alt="" />
            </button>
            <button
              type="button"
              // onClick={() => handleLike(dev._id)}
            >
              <img src={like} alt="" />
            </button>
          </Buttons>
        </li>
      </ul>
    </Container>
  )
}
