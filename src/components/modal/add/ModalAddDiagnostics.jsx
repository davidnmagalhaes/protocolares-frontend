import React, { useState, useContext } from 'react';
import { AddButton } from '../../../global/Styles';
import { Formik, Form } from 'formik';
import Schema from '../schemas/schemaDiagnostics';
import {
  TextField,
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
import { Actions } from './ModalAddDiagnosticsStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../../services/context';

const ModalAddUnits = ({ params }) => {
  const [open, setOpen] = useState(false);
  const { setLoading } = useContext(Context);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleRegister = (values) => {
    setOpen(false);
    setLoading(true);
    api
      .post(Prefix + '/diagnostics', values)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Parabéns!',
          text: 'Dados cadastrados com sucesso!',
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
          text: 'Houve um erro, tente novamente...',
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
      {!open ? (
        <AddButton onClick={handleClickOpen}>
          <img src="../../../media/plus.svg" alt="Adicionar" />
        </AddButton>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Cadastro de Doenças'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Formik
                initialValues={{
                  name: '',
                  active: true,
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

                    <Actions>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancelar
                        </Button>
                        <Button type="submit" color="primary" autoFocus>
                          Cadastrar
                        </Button>
                      </DialogActions>
                    </Actions>
                  </Form>
                )}
              </Formik>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
export default ModalAddUnits;
