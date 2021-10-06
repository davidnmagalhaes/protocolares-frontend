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
  AddButton,
} from './HeaderStyle';

const HeaderComponent = ({ title }) => {
  return (
    <Header>
      <Titles>
        <TitleSm>Início &gt; Pacientes</TitleSm>
        <TitleLg>
          {`${title}`}
          <AddButton>
            <img src="../../../media/plus.svg" alt="Adicionar" />
          </AddButton>
        </TitleLg>
      </Titles>
      <Search>
        <FormSearch>
          <SearchIcon src="../../../media/search.svg" />
          <InputSearch type="search" placeholder="Pesquisar paciente" />
        </FormSearch>
      </Search>
    </Header>
  );
};
export default HeaderComponent;
