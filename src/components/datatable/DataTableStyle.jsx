import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: table;
`;

export const TableHead = styled.div`
  display: flex;
  background: #fff;
  height: 25px;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 15px;
`;

export const TableTh = styled.div`
  width: ${(props) => props.width}%;
  color: #464e5f;
  font-size: 11.68px;
  display: flex;
  justify-content: start;
  align-items: center;
  letter-spacing: 1.2px;
  font-weight: bold;
`;

export const DeleteAll = styled.div`
  width: 5%;
  color: #464e5f;
  font-size: 11.68px;
  display: flex;
  justify-content: start;
  align-items: center;
  letter-spacing: 1.2px;
  font-weight: bold;
`;

export const TableRow = styled.div`
  display: flex;
  background: #fff;
  min-height: 25px;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 5px;
`;

export const TableCol = styled.div`
  width: ${(props) => props.width}%;
  color: #464e5f;
  font-size: 11.68px;
  display: flex;
  justify-content: center;
  align-items: start;
  letter-spacing: 1.2px;
  font-weight: bold;
  flex-direction: column;
  min-height: 10px;

  & > span {
    font-weight: normal;
  }
`;

export const DeleteOne = styled.div`
  width: 5%;
  color: #464e5f;
  font-size: 11.68px;
  display: flex;
  justify-content: start;
  align-items: center;
  letter-spacing: 1.2px;
  font-weight: bold;
`;

export const Options = styled.div`
  width: 5%;
  color: #464e5f;
  font-size: 11.68px;
  display: flex;
  justify-content: start;
  align-items: center;
  letter-spacing: 1.2px;
  font-weight: bold;
`;

export const IconOptions = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const RemoveOptions = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const NoData = styled.div`
  display: flex;
  width: 100%;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  text-transform: none;
  font-size: 14px;
`;
