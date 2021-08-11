import styled from 'styled-components';

export const PTContent = styled.section`
  background: #003d93;
  color: #fff;
  min-height: 100vh;
  display: flex;
`;

export const PTLogin = styled.div`
  background-image: url('media/bg-login.png');
  background-repeat: no-repeat;
  width: 70%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
`;

export const PTImageLogin = styled.div`
  background-image: url('media/image-login.png');
  background-repeat: no-repeat;
  width: 85%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const PTBrand = styled.div`
  background-image: url('media/logotipo-protocolares.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 158px;
  background-position: center;
  margin-top: 120px;
  margin-bottom: 30px;
`;

export const PTTitle = styled.h2`
  font-size: 29.63px;
  color: #fcec5c;
  margin-bottom: 5px;
`;

export const PTParagraph = styled.p`
  font-size: 18;
  color: #fff;
  font-weight: 400;
`;

export const PTFields = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  align-items: center;
`;
