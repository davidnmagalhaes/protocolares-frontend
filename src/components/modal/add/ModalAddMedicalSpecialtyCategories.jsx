import React, { useState, useContext } from 'react';
import { AddButton } from '../../../global/Styles';
import { Formik, Form } from 'formik';
import Schema from '../schemas/schemaMedicalSpecialtyCategories';
import {
  Select,
  MenuItem,
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
import { Actions } from './ModalAddMedicalSpecialtyCategoriesStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../../services/context';
import { useFetch } from '../../hooks/useFetch';

const ModalAddMedicalSpecialtyCategories = ({ params }) => {
  const [open, setOpen] = useState(false);
  const { setLoading } = useContext(Context);

  const listMedicalSpecialties = useFetch(Prefix + '/medical-specialties');

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
      .post(Prefix + '/medical-specialty-categories', values)
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
            {'Cadastro de Categorias de Especialidades Médicas'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Formik
                initialValues={{
                  name: '',
                  medical_specialty_id: '',
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

                    <Select
                      fullWidth
                      name="medical_specialty_id"
                      label="Categoria de especialidade"
                      value={values.medical_specialty_id}
                      displayEmpty
                      onChange={handleChange}
                      error={
                        touched.medical_specialty_id &&
                        Boolean(errors.medical_specialty_id)
                      }
                      helperText={
                        touched.medical_specialty_id &&
                        errors.medical_specialty_id
                      }
                      className={classes.formControl}
                    >
                      <MenuItem value="" disabled>
                        Escolha uma especialidade
                      </MenuItem>
                      {listMedicalSpecialties.data?.models?.data?.map((map) => {
                        return <MenuItem value={map.id}>{map.name}</MenuItem>;
                      })}
                    </Select>

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
export default ModalAddMedicalSpecialtyCategories;
