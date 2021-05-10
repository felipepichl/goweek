import React from 'react';
import LikeButton from 'react-lottie';

import more from '../../assets/more.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import likeAnimation from '../../assets/liked.json';

import { Container, Post, PostButtons } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Post>
        <header>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/22602639?v=4"
              alt=""
            />
            <span>__dirname</span>
          </div>
          <img src={more} alt="" />
        </header>

        <article>
          <img
            src="https://image.shutterstock.com/image-photo/silhouetted-loving-couple-sunset-600w-1774166057.jpg"
            alt=""
          />
        </article>

        <footer>
          <PostButtons>
            <button type="button">
              <LikeButton
                options={{
                  animationData: likeAnimation,
                  loop: false,
                  autoplay: false,
                }}
              />
            </button>

            <button type="button">
              <img src={comment} alt="" />
            </button>

            <button type="button">
              <img src={send} alt="" />
            </button>
          </PostButtons>
        </footer>
      </Post>
    </Container>
  );
};

export default Home;
