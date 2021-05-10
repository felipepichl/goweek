import React, { useEffect, useState } from 'react';
import LikeButton from 'react-lottie';

import api from '../../services/api';

import more from '../../assets/more.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import likeAnimation from '../../assets/liked.json';

import {
  Container,
  Post,
  PostButtons,
  PostComment,
  PostDescription,
  PostLike,
} from './styles';

interface Post {
  id: string;
  user: {
    username: string;
    preview: string;
  };
  url: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPost() {
      const response = await api.get('/posts');

      setPosts(response.data);
    }

    loadPost();
  }, []);

  return (
    <Container>
      {posts.map(post => (
        <Post key={post.id}>
          <header>
            <div>
              <img src={post.user.preview} alt="" />
              <span>{post.user.username}</span>
            </div>
            <img src={more} alt="" />
          </header>

          <article>
            <img src={post.url} alt="" />
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

            <PostLike>
              <>
                <img
                  src="https://avatars.githubusercontent.com/u/22602639?v=4"
                  alt=""
                />
                <span>Like by</span>
                <strong>mark_24</strong>
              </>
            </PostLike>

            <PostDescription>
              <p>
                <strong>mark_24</strong>
                {' A beautiful sunset '}
              </p>
            </PostDescription>
          </footer>

          <form action="">
            <section>
              <textarea placeholder="Add a comment..." />
              <PostComment type="button">Post</PostComment>
            </section>
          </form>
        </Post>
      ))}
    </Container>
  );
};

export default Home;
