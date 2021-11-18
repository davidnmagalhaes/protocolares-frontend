import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import Schema from '../schemas/schemaAgents';
import {
  Select,
  TextField,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import '../../../global/style.css';
import api from '../../../services/api';
import { Prefix } from '../../../services/prefix';
import Swal from 'sweetalert2';
import { mutate as mutateGlobal } from 'swr';
import { Actions } from './ModalEditAgentsStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../../services/context';
import { useFetch } from '../../hooks/useFetch';

const ModalEditAgents = ({ id, params, open, setOpen }) => {
  const { setLoading } = useContext(Context);

  const infoEdit = useFetch(Prefix + '/agents/' + id);
  const listPSF = useFetch(Prefix + '/programs');

  const HandleRegister = (values) => {
    setLoading(true);
    api
      .put(Prefix + '/agents/' + id, values)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Parabéns!',
          text: 'Dados atualizados com sucesso!',
          confirmButtonText: 'Fechar',
          confirmButtonColor: '#99c77f',
        }).then(() => {
          mutateGlobal(params);
          setLoading(false);
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Ocorreu um erro, tente novamente...',
          confirmButtonText: 'Fechar',
          confirmButtonColor: '#99c77f',
        }).then(() => {
          mutateGlobal(params);
          setLoading(false);
        });
      });
  };

  const useStyles = makeStyles(() => ({
    formControl: {
      marginTop: '15px !important',
      '& .MuiSelect-select.MuiSelect-select': {
        marginTop: '15px',
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Dialog
        open={open}
        onClose={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Atualização de Agentes'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Formik
              initialValues={{
                name: infoEdit.data?.model.name,
                program_id: infoEdit.data?.model.program_id,
                active: infoEdit.data?.model.active,
              }}
              validationSchema={Schema}
              onSubmit={HandleRegister}
              enableReinitialize
            >
              {({ values, handleChange, touched, errors }) => (
                <Form>
                  <TextField
                    fullWidth
                    name="name"
                    label="Nome"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    className={classes.formControl}
                  />

                  <Select
                    fullWidth
                    name="program_id"
                    label="PSF"
                    value={values.program_id}
                    displayEmpty
                    onChange={handleChange}
                    error={touched.program_id && Boolean(errors.program_id)}
                    helperText={touched.program_id && errors.program_id}
                    className={classes.formControl}
                  >
                    <MenuItem value="" disabled>
                      Escolha um PSF
                    </MenuItem>
                    {listPSF.data?.models?.data?.map((map) => {
                      return <MenuItem value={map.id}>{map.name}</MenuItem>;
                    })}
                  </Select>

                  <Actions>
                    <DialogActions>
                      <Button onClick={setOpen} color="primary">
                        Cancelar
                      </Button>
                      <Button type="submit" color="primary" autoFocus>
                        Atualizar
                      </Button>
                    </DialogActions>
                  </Actions>
                </Form>
              )}
            </Formik>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ModalEditAgents;
