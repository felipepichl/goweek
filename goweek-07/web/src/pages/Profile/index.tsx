import React from 'react';

import Button from '../../components/Button';

import { Container, Content, ProfileContainer, Bio, Posts } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Content>
        <ProfileContainer>
          <img
            src="https://avatars.githubusercontent.com/u/22602639?v=4"
            alt=""
          />

          <div>
            <span>__dirname</span>
            <Button>Edit Profile</Button>
          </div>
        </ProfileContainer>
        <Bio>
          <p>I like to learn stuff</p>
        </Bio>

        <Posts>
          <ul>
            <li>
              <img
                src="https://images.unsplash.com/photo-1484053801020-3a74ca659b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vdyUyMGNhc3RsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1484053801020-3a74ca659b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vdyUyMGNhc3RsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1484053801020-3a74ca659b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vdyUyMGNhc3RsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </li>
          </ul>
        </Posts>
      </Content>
    </Container>
  );
};

export default Profile;
