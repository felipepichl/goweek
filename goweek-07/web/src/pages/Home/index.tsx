import React, { useCallback, useEffect, useState } from 'react';
import LikeButton from 'react-lottie';

import api from '../../services/api';

import Storie from '../../components/Storie';

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
  description: string;
  lastLike: Array<{
    username: string;
    preview: string;
  }>;
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

  const handleLike = useCallback(async (id: string) => {
    await api.post(`/likes/${id}`);
  }, []);

  return (
    <Container>
      <Storie />

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
              <button type="button" onClick={() => handleLike(post.id)}>
                <LikeButton
                  options={{
                    animationData: likeAnimation,
                    loop: false,
                    autoplay: false,
                  }}
                  height={35}
                  width={35}
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
                <img src={post.lastLike[0].preview} alt="" />
                <span>Like by</span>
                <strong>{post.lastLike[0].username}</strong>
              </>
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
