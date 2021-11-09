import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
`;

export const Titles = styled.div`
  display: flex;
  min-width: 200px;
  height: 60px;
  font-family: 'DM Sans', Poppins;
  flex-direction: column;
  color: #333333;
  padding: 0 0 0 15px;
  border-left: 3px solid #fced69;
`;

export const TitleSm = styled.p`
  font-size: 14px;
  font-family: 'DM Sans', Poppins;
  font-weight: bold;
`;

export const TitleLg = styled.p`
  font-size: 34px;
  font-family: 'DM Sans', Poppins;
  font-weight: bold;
`;

export const Search = styled.div`
  display: flex;
  align-items: end;
  width: 25%;
`;

export const FormSearch = styled.form`
  width: 100%;
  display: flex;
  background: #fff;
  border-radius: 10px;
  padding-left: 20px;
`;
export const SearchIcon = styled.img`
  width: 5%;
  margin-right: 20px;
`;

export const InputSearch = styled.input`
  height: 46px;
  width: 80%;
  border: 0;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px white;
  }
`;
