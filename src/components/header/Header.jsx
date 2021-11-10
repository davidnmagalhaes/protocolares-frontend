import React from 'react';
import {
  Header,
  Titles,
  TitleSm,
  TitleLg,
  Search,
  FormSearch,
  SearchIcon,
  InputSearch,
} from './HeaderStyle';

const HeaderComponent = ({ title, button }) => {
  return (
    <>
      <Header>
        <Titles>
          <TitleSm>Gestão de </TitleSm>
          <TitleLg>
            {title}
            {button}
          </TitleLg>
        </Titles>
        <Search>
          <FormSearch>
            <SearchIcon src="../../../media/search.svg" />
            <InputSearch type="search" placeholder="Pesquisar paciente" />
          </FormSearch>
        </Search>
      </Header>
    </>
  );
};
export default HeaderComponent;
