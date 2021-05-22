import React, { useCallback, useState } from 'react';
import Animation from 'react-lottie';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import likeAnimation from '../../assets/liked.json';

import { Container, PostButtons, PostLike, PostDescription } from './styles';

import { IPost } from '../../pages/Home';

interface IFooterPostProps {
  data: IPost;
}

const FooterPost: React.FC<IFooterPostProps> = ({ data }) => {
  const [toogle, setToogle] = useState(false);
  const { user } = useAuth();

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
      <PostButtons>
        <button type="button" onClick={() => handleLike(data.id)}>
          {data.likes.indexOf(user.id) === -1 ? (
            <Animation
              direction={toogle ? 1 : -1}
              options={{
                animationData: likeAnimation,
                loop: false,
                autoplay: false,
              }}
            />
          ) : (
            <Animation
              direction={toogle ? -1 : 1}
              options={{
                animationData: likeAnimation,
                loop: false,
                autoplay: true,
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

      {data.lastLike.length > 0 && (
        <PostLike>
          <img src={data.lastLike[0].preview} alt="" />
          <span>Like by</span>
          <strong>{data.lastLike[0].username}</strong>
          {data.lastLike.length > 1 && (
            <>
              <span>and</span>
              <strong>
                {data.likes.length - 1}
                others
              </strong>
            </>
          )}
        </PostLike>
      )}

      <PostDescription>
        <p>
          <strong>{data.user.username}</strong>
          {data.description}
        </p>
      </PostDescription>
    </Container>
  );
};

export default FooterPost;
