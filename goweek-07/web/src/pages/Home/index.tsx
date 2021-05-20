import React, { useCallback, useEffect, useState } from 'react';
import Animation from 'react-lottie';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import Storie from '../../components/Storie';

import more from '../../assets/more.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import likeAnimation from '../../assets/liked.json';
import loading from '../../assets/history.json';

import {
  Container,
  Post,
  ImageContainer,
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
  description: string;
  lastLike: Array<{
    username: string;
    preview: string;
  }>;
  likes: Array<string>;
}

const Home: React.FC = () => {
  const [toogle, setToogle] = useState(false);
  const { user } = useAuth();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPost() {
      const response = await api.get('/posts');

      setPosts(response.data);

      /**
        *
        return 0 === true return -1 === false
        return 1 === true return -1 === false
        posts.map(post => post.likes.indexOf(user.id) === 0);
      */
    }

    loadPost();
  }, [user.id]);

  const handleLike = useCallback(
    async (id: string) => {
      await api.post(`/likes/${id}`);

      if (toogle) {
        setToogle(false);
      } else {
        setToogle(true);
      }
    },
    [toogle],
  );

  return (
    <Container>
      <Storie />

      {posts.map(post => (
        <Post key={post.id}>
          <header>
            <div>
              <ImageContainer>
                <Animation
                  options={{
                    animationData: loading,
                    loop: true,
                    autoplay: true,
                  }}
                />
                <img src={post.user.preview} alt="" />
              </ImageContainer>
              <span>{post.user.username}</span>
            </div>
            <img src={more} alt="" />
          </header>

          <article>
            <img src={post.url} alt="" />
          </article>

          <footer>
            <PostButtons>
              <button type="button" onClick={() => handleLike(post.id)}>
                {post.likes.indexOf(user.id) === 0 ? (
                  <Animation
                    direction={toogle ? -1 : 1}
                    options={{
                      animationData: likeAnimation,
                      loop: false,
                      autoplay: true,
                    }}
                  />
                ) : (
                  <Animation
                    direction={toogle ? 1 : -1}
                    options={{
                      animationData: likeAnimation,
                      loop: false,
                      autoplay: false,
                    }}
                  />
                )}
              </button>

              <button type="button">
                <img src={comment} alt="" />
              </button>

              <button type="button">
                <img src={send} alt="" />
              </button>
            </PostButtons>

            <PostLike>
              {/* <>
                <img src={post.lastLike[0].preview} alt="" />
                <span>Like by</span>
                <strong>{post.lastLike[0].username}</strong>
              </> */}
            </PostLike>

            <PostDescription>
              <p>
                <strong>{post.user.username}</strong>
                {post.description}
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
