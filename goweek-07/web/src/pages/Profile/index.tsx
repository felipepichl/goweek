import React from 'react';

import Button from '../../components/Button';

import { Container, ProfileContainer } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Profile;
