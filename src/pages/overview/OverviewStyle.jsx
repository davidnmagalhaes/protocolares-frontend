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
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  border-left: 3px solid #fced69;
  align-items: stretch;
`;

export const Titles = styled.div`
  display: flex;
  min-width: 200px;
  height: 100px;
  font-family: 'DM Sans', Poppins;
  flex-direction: column;
  color: #333333;
  padding: 0 0 0 15px;
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
