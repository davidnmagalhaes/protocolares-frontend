import React from 'react';
import Navbar from '../../components/sidebar/Navbar';
import Header from '../../components/header/Header';
import { Content, ContentInner, ContentInside } from './ProfessionalsStyle';

const Profissionals = () => {
  return (
    <Content>
      <Navbar />
      <ContentInner>
        <Header title="Profissionais" />
        <ContentInside></ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Profissionals;
