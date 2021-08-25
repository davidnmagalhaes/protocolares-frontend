import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PTContent = styled.section`
  background: #003d93;
  color: #fff;
  min-height: 100vh;
  display: flex;
`;

export const PTLogin = styled.div`
  background-image: url('media/bg-login.png');
  background-repeat: no-repeat;
  width: 80%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  background-size: contain;
`;

export const PTImageLogin = styled.div`
  background-image: url('media/image-login.png');
  background-repeat: no-repeat;
  width: 85%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  background-size: contain;
`;

export const PTBrand = styled.div`
  background-image: url('media/logotipo-protocolares.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 158px;
  background-position: center;
  margin-top: 8%;
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

export const PTBetween = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const PTLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-top: 10px;
  font-size: 14px;
  &:hover {
    color: #fcec5c;
    transition: 1s;
  }
`;

export const PTButton = styled.button`
  background: #fcec5c;
  border-radius: 70px;
  padding: 10px;
  width: 20%;
  border: 0;
  color: #003d93;
  margin-top: 5%;
  &:hover {
    background: #fff;
    transition: 2s;
    cursor: pointer;
  }
`;

export const PTAuthor = styled(PTParagraph)`
  margin-top: 5%;
  font-size: 12px;
  color: #ffffff8c;
`;
