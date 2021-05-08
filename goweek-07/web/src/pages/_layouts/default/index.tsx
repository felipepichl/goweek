import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { Wrapper } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Footer />
      {children}
    </Wrapper>
  );
};

export default DefaultLayout;
