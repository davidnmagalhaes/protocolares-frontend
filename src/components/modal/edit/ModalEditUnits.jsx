import React, { useContext } from 'react';
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
import { Actions } from './ModalEditUnitsStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../../services/context';
import { useFetch } from '../../hooks/useFetch';

const ModalEditProfessional = ({ id, params, open, setOpen }) => {
  const { setLoading } = useContext(Context);

  const infoEdit = useFetch(Prefix + '/units/' + id);

  const HandleRegister = (values) => {
    setLoading(true);
    api
      .put(Prefix + '/units/' + id, values)
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
          {'Atualização de Unidades'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Formik
              initialValues={{
                name: infoEdit.data?.model.name,
                active: infoEdit.data?.model.active,
                phone: infoEdit.data?.model.phone,
                another_phone: infoEdit.data?.model.another_phone,
                email: infoEdit.data?.model.email,
                address: infoEdit.data?.model.address,
                neighborhood: infoEdit.data?.model.neighborhood,
                number: infoEdit.data?.model.number,
                zipcode: infoEdit.data?.model.zipcode,
                city: infoEdit.data?.model.city,
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
                    error={touched.neighborhood && Boolean(errors.neighborhood)}
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
