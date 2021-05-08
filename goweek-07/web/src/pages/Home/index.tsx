import React from 'react';

import more from '../../assets/more.svg';
// import comment from '../../assets/comment.svg';
// import send from '../../assets/send.svg';

import { Container, Post } from './styles';

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
      </Post>
    </Container>
  );
};

export default Home;
