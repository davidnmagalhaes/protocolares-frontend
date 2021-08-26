import React from 'react';
import Navbar from '../../components/sidebar/Navbar';
import {
  Content,
  ContentInner,
  Header,
  Titles,
  TitleSm,
  TitleLg,
} from './OverviewStyle';

const Overview = () => {
  const userName = localStorage.getItem('@name').replace(/[\\"]/g, '');
  return (
    <Content>
      <Navbar />
      <ContentInner>
        <Header>
          <Titles>
            <TitleSm>Olá {userName}!</TitleSm>
            <TitleLg>Seja bem vindo ao Protocolares</TitleLg>
          </Titles>
        </Header>
      </ContentInner>
    </Content>
  );
};
export default Overview;
