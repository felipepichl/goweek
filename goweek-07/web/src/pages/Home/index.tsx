import React, { useEffect, useState } from 'react';
import Animation from 'react-lottie';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import Storie from '../../components/Storie';
import FooterPost from '../../components/FooterPost';

import more from '../../assets/more.svg';

import loading from '../../assets/history.json';

import { Container, Post, ImageContainer, PostComment } from './styles';

export interface IPost {
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
  const { user } = useAuth();

  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    async function loadPost() {
      const response = await api.get('/posts');

      setPosts(response.data);
    }

    loadPost();
  }, [user.id]);

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

          <FooterPost data={post} />

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
