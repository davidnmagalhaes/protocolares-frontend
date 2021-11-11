import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    email: 'Preencha um e-mail válido',
    min: 'Mínimo de ${min} caracteres',
    max: 'Máximo de ${max} caracteres',
  },
  number: {
    min: 'Deve ser maior ou igual a ${min}',
    max: 'Deve ser menor ou igual a ${max}',
  },
});

const Schema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  phone: Yup.string().min(3).required(),
  another_phone: Yup.string(),
  email: Yup.string().email().required(),
  address: Yup.string().min(3).required(),
  neighborhood: Yup.string().min(3).required(),
  number: Yup.string().min(1).required(),
  zipcode: Yup.string().min(3).required(),
  city: Yup.string().min(3).required(),
});
export default Schema;
