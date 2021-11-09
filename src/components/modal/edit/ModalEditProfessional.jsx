import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import Schema from '../schemas/schemaAddProfessional';
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
import { Actions } from './ModalEditProfessionalStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../../services/context';

const ModalEditProfessional = ({ params, open, setOpen }) => {
  const { setLoading } = useContext(Context);

  const HandleRegister = (values) => {
    setLoading(true);
    api.post(Prefix + '/professionals', values).then(() => {
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
          {'Cadastro de Profissionais'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Formik
              initialValues={{
                name: '',
                active: true,
                local: 1,
                specialties: '',
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
                    name="local"
                    label="Local"
                    value={values.local}
                    onChange={handleChange}
                    error={touched.local && Boolean(errors.local)}
                    helperText={touched.local && errors.local}
                    className={classes.formControl}
                  >
                    <MenuItem value={1}>Profissional local</MenuItem>
                    <MenuItem value={0}>Profissional não é local</MenuItem>
                  </Select>

                  <TextField
                    fullWidth
                    name="specialties"
                    label="Especialidade"
                    value={values.specialties}
                    onChange={handleChange}
                    error={touched.specialties && Boolean(errors.specialties)}
                    helperText={touched.specialties && errors.specialties}
                    className={classes.formControl}
                  />

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
export default ModalEditProfessional;