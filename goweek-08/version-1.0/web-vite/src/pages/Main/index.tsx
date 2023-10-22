import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import { Container, Buttons } from "./styles";

export function Main() {
  return (
    <Container>
      <Link to="/">
          <img src={logo} alt="Tindev" />
      </Link>
      
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
              //onClick={() => handleDislike(dev._id)}
            >
              <img src={dislike} alt="" />
            </button>
            <button 
              type="button" 
              //onClick={() => handleLike(dev._id)}
              >
              <img src={like} alt="" />
            </button>
          </Buttons>
        </li>
      </ul>
    </Container>
  )
}