import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  width: 20%;
  background: #000;
  min-height: 100%;
  padding: 2% 0 2% 0;
  background-image: url('media/bg-sidebar-protocolares.jpg');
  background-attachment: fixed;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 80%;
  margin-bottom: 5%;
`;

export const Ul = styled.div`
  width: 100%;
  color: #fff;
  font-size: 14px;
`;

export const Li = styled.a`
  display: flex;
  width: 88%;
  height: 43px;
  padding: 0 0 0 10%;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  font-family: 'DM Sans', sans serif;
  text-decoration: none;
  color: #fff;

  :hover {
    background: #ffffff21;
    border-right: 3px solid #fced69;
    color: #fff;
  }

  :visited {
    color: #fff;
    text-decoration: none;
  }
`;

export const Icon = styled.img`
  width: 24px;
  margin-right: 15px;
`;

export const Logout = styled.button`
  display: flex;
  width: 77%;
  height: 46px;
  background: #fced69;
  border: 0;
  border-radius: 100px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: #fff9c6;
    transition: 0.3s;
  }
`;

export const LogoutIcon = styled.img`
  width: 18px;
  margin-right: 15px;
`;
