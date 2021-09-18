import React from 'react';
import Navbar from '../../components/sidebar/Navbar';
import {
  Content,
  ContentInner,
  Header,
  Titles,
  TitleSm,
  TitleLg,
  Search,
  FormSearch,
  SearchIcon,
  InputSearch,
  UpdateSystem,
  ContentInside,
  H2Sm,
  Doubt,
  Ul,
  Li,
  Span,
  Button,
  Center,
  DescriptionDoubt,
  ImgDoubt,
  DescriptionTitle,
  DescriptionText,
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
          <Search>
            <FormSearch>
              <SearchIcon src="../../../media/search.svg" />
              <InputSearch type="search" placeholder="Pesquisar paciente" />
            </FormSearch>
          </Search>
        </Header>
        <ContentInside>
          <UpdateSystem>
            <H2Sm>Atualizações do sistema</H2Sm>
            <Ul>
              <Li>
                Atualização de segurança
                <Span>24/07/2021 às 16:36</Span>
              </Li>
              <Li>
                Atualização de segurança
                <Span>24/07/2021 às 16:36</Span>
              </Li>
              <Li>
                Atualização de segurança
                <Span>24/07/2021 às 16:36</Span>
              </Li>
            </Ul>
            <Center>
              <Button>Ver todas</Button>
            </Center>
          </UpdateSystem>
          <Doubt>
            <DescriptionDoubt>
              <DescriptionTitle>Central de dúvidas</DescriptionTitle>
              <DescriptionText>
                A central de dúvidas lhe ajuda a manusear o sistema e obter
                melhor desempenho de uso das ferramentas.
              </DescriptionText>
              <Button>Acessar</Button>
            </DescriptionDoubt>
            <ImgDoubt bg="../../../media/doubt-img.png" />
          </Doubt>
        </ContentInside>
      </ContentInner>
    </Content>
  );
};
export default Overview;
