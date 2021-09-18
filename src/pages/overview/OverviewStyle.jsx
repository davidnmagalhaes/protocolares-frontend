import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;
  background: #e5e5e5;
`;

export const ContentInner = styled.section`
  display: flex;
  width: 80%;
  padding: 3%;
  flex-wrap: wrap;
  flex-direction: column;
`;

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

export const ContentInside = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  margin-top: 45px;
  justify-content: space-between;
`;

export const UpdateSystem = styled.div`
  width: 30%;
  height: 300px;
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  margin-right: 10px;
`;

export const H2Sm = styled.h2`
  font-family: 'DM Sans';
  font-size: 20px;
  color: #333333;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  width: 100%;
  list-style: none;
  border-left: 3px solid #fced69;
  padding: 0 15px;
  font-size: 14px;
  font-weight: bold;
  flex-direction: column;
  margin: 30px 0;
`;

export const Span = styled.span`
  font-family: 'DM Sans';
  width: 100%;
  font-size: 12px;
  font-weight: 100;
  color: #a3aed0;
`;

export const Doubt = styled.div`
  font-family: 'DM Sans';
  width: 60%;
  height: 300px;
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  align-items: center;
`;

export const DescriptionDoubt = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionTitle = styled.h2`
  font-family: 'DM Sans';
  font-size: 34px;
  font-weight: 700;
  color: #333333;
`;

export const DescriptionText = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 100;
  color: #a0a0a0;
`;

export const ImgDoubt = styled.div`
  width: 40%;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DM Sans';
  border: 0;
  width: 140px;
  height: 46px;
  background: #fced69;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
  &:hover {
    background: #003b97;
    color: #fff;
    transition: 0.6s;
  }
`;
