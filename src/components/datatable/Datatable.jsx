import React, { useState, useEffect, useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../services/api';
import { Prefix } from '../../services/prefix';
import Swal from 'sweetalert2';
import { mutate as mutateGlobal } from 'swr';
import Pagination from '@material-ui/lab/Pagination';
import {
  Table,
  TableHead,
  TableTh,
  DeleteAll,
  TableRow,
  TableCol,
  DeleteOne,
  Options,
  IconOptions,
  RemoveOptions,
  NoData,
} from './DataTableStyle';
import { Context } from '../../services/context';

const Datatable = ({
  columns,
  data,
  deleteRequest,
  params,
  page,
  setPage,
  lastPage,
}) => {
  const [infoData, setInfoData] = useState(data);
  const [checkedAll, setCheckedAll] = useState(false);
  const useStyles = makeStyles(() => ({
    root: {
      '& .MuiPagination-ul': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      },
    },
    Checkbox: {
      '& .MuiIconButton-colorSecondary:hover': {
        backgroundColor: 'rgb(0 59 151 / 5%)',
      },
      '& .MuiCheckbox-colorSecondary.Mui-checked': {
        color: '#003b97',
      },
      '& .MuiIconButton-label': {
        color: '#003b97',
      },
      '& .MuiTypography-body1': {
        'font-family': 'Poppins',
        'font-size': '14px',
      },
    },
  }));
  const classes = useStyles();
  const { setLoading } = useContext(Context);

  const widthColumns = 90 / columns.length;

  const HandleChecked = (e, id) => {
    let newArray = [...infoData];
    newArray[id] = {
      ...newArray[id],
      checked: e.target.checked,
    };
    setInfoData(newArray);
  };

  const SelectAll = () => {
    setCheckedAll(!checkedAll);

    setInfoData(
      infoData.map((map) => {
        return {
          cols: map.cols,
          id: map.id,
          checked: !checkedAll,
          options: map.options,
        };
      }),
    );
  };

  const Remove = () => {
    setLoading(true);
    infoData
      .filter((fill) => fill.checked == true)
      .map((map) => {
        return api
          .delete(Prefix + '/' + deleteRequest + '/' + map.id)
          .then(() => {
            mutateGlobal(params);
            setLoading(false);
            Swal.fire({
              icon: 'success',
              title: 'Parabéns!',
              text: 'Dados removidos com sucesso!',
              confirmButtonText: 'Fechar',
              confirmButtonColor: '#99c77f',
            }).then(() => {
              setInfoData(infoData.filter((fill) => fill.id != map.id));
            });
          });
      });
  };

  useEffect(() => {
    setInfoData(data);
  }, [data]);

  return (
    <>
      <Table>
        <TableHead>
          <DeleteAll>
            <Checkbox
              checked={checkedAll}
              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
              className={classes.Checkbox}
              onChange={SelectAll}
            />
          </DeleteAll>
          {columns.map((map, key) => (
            <TableTh key={key} width={widthColumns}>
              {map}
            </TableTh>
          ))}
          <Options>
            {infoData?.filter((fill) => fill.checked == true).length > 0 ? (
              <RemoveOptions src="../../../media/remove.svg" onClick={Remove} />
            ) : (
              <IconOptions src="../../../media/menu.svg" />
            )}
          </Options>
        </TableHead>
        {infoData.length == 0 ? (
          <NoData>Ops... infelizmente não há registros!</NoData>
        ) : (
          infoData?.map((map, key) => (
            <TableRow key={key}>
              <DeleteOne>
                <Checkbox
                  checked={map.checked}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                  className={classes.Checkbox}
                  onChange={(e) => HandleChecked(e, key)}
                />
              </DeleteOne>
              {map.cols.map((map, key) => (
                <TableCol key={key} width={widthColumns}>
                  <strong>{map.title}</strong>
                  <span>{map.subtitle}</span>
                </TableCol>
              ))}
              <Options>{map.options}</Options>
            </TableRow>
          ))
        )}

        <Pagination
          count={lastPage}
          defaultPage={page}
          variant="outlined"
          color="primary"
          className={classes.root}
          onChange={(event, page) => setPage(page)}
        />
      </Table>
    </>
  );
};

export default Datatable;
