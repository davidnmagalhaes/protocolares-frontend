import React, { useState, useContext } from 'react';
import { AddButton } from '../../../global/Styles';
import { Formik, Form } from 'formik';
import Schema from '../schemas/schemaUnits';
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
import { Actions } from './ModalAddProfessionalStyle';
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
      .post(Prefix + '/units', values)
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
            {'Cadastro de Unidades'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Formik
                initialValues={{
                  name: '',
                  active: true,
                  phone: '',
                  another_phone: '',
                  email: '',
                  address: '',
                  neighborhood: '',
                  number: '',
                  zipcode: '',
                  city: '',
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

                    <TextField
                      fullWidth
                      name="email"
                      label="E-mail"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      className={classes.formControl}
                    />

                    <TextField
                      fullWidth
                      name="zipcode"
                      label="CEP"
                      value={values.zipcode}
                      onChange={handleChange}
                      error={touched.zipcode && Boolean(errors.zipcode)}
                      helperText={touched.zipcode && errors.zipcode}
                      className={classes.formControl}
                    />

                    <TextField
                      fullWidth
                      name="address"
                      label="Endereço"
                      value={values.address}
                      onChange={handleChange}
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                      className={classes.formControl}
                    />

                    <TextField
                      fullWidth
                      name="number"
                      label="Número"
                      value={values.number}
                      onChange={handleChange}
                      error={touched.number && Boolean(errors.number)}
                      helperText={touched.number && errors.number}
                      className={classes.formControl}
                    />

                    <TextField
                      fullWidth
                      name="neighborhood"
                      label="Bairro"
                      value={values.neighborhood}
                      onChange={handleChange}
                      error={
                        touched.neighborhood && Boolean(errors.neighborhood)
                      }
                      helperText={touched.neighborhood && errors.neighborhood}
                      className={classes.formControl}
                    />

                    <TextField
                      fullWidth
                      name="city"
                      label="Cidade"
                      value={values.city}
                      onChange={handleChange}
                      error={touched.city && Boolean(errors.city)}
                      helperText={touched.city && errors.city}
                      className={classes.formControl}
                    />

                    <TextField
                      fullWidth
                      name="phone"
                      label="Telefone"
                      value={values.phone}
                      onChange={handleChange}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                      className={classes.formControl}
                    />

                    <TextField
                      fullWidth
                      name="another_phone"
                      label="Celular"
                      value={values.another_phone}
                      onChange={handleChange}
                      error={
                        touched.another_phone && Boolean(errors.another_phone)
                      }
                      helperText={touched.another_phone && errors.another_phone}
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
